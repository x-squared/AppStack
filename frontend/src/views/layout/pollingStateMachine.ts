export interface PollingPendingStep {
  kind: 'pending';
  operationId?: string | null;
  retryAfterMs?: number;
}

export interface PollingReadyStep<T> {
  kind: 'ready';
  data: T;
}

export type PollingStep<T> = PollingPendingStep | PollingReadyStep<T>;

interface RunPollingStateMachineArgs<T> {
  requestStep: (signal: AbortSignal) => Promise<PollingStep<T>>;
  signal: AbortSignal;
  onPending?: (step: PollingPendingStep) => void;
  defaultRetryMs?: number;
}

function waitWithSignal(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }
    const timeoutId = window.setTimeout(() => {
      signal.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      window.clearTimeout(timeoutId);
      signal.removeEventListener('abort', onAbort);
      reject(new DOMException('Aborted', 'AbortError'));
    };
    signal.addEventListener('abort', onAbort);
  });
}

export async function runPollingStateMachine<T>({
  requestStep,
  signal,
  onPending,
  defaultRetryMs = 3000,
}: RunPollingStateMachineArgs<T>): Promise<T> {
  while (true) {
    const step = await requestStep(signal);
    if (step.kind === 'ready') {
      return step.data;
    }
    onPending?.(step);
    const retryMs = step.retryAfterMs && step.retryAfterMs > 0 ? step.retryAfterMs : defaultRetryMs;
    await waitWithSignal(retryMs, signal);
  }
}
