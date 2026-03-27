export const templateViewGuidance = {
  view: [
    'Keep *View.tsx files orchestration-thin: compose sections, pass grouped props.',
    'Move data loading, mutations, and derived state into use*ViewModel hooks.',
    'Do not bind view-level behavior to environment switches.',
  ],
  sections: [
    'Each section has one responsibility and a clear heading.',
    'Split large sections into focused child components before adding more logic.',
    'Show loading, empty, and error states explicitly per section.',
  ],
  tables: [
    'Use stable columns and explicit empty-state rows.',
    'Keep row actions predictable and colocated in one action column.',
    'Format values at render boundaries (date, identifiers, status labels).',
  ],
  forms: [
    'Model form state in hooks, render sections as controlled inputs.',
    'Use explicit dirty/saving/error indicators and clear save/cancel actions.',
    'Follow recipients/preferences patterns for required fields and validation.',
  ],
  detailTabs: [
    'Tabs switch focused sub-views without reloading the full screen.',
    'Keep tab state centralized and pass typed tab props to child sections.',
    'Mirror PatientDetail/CoordinationDetail tab composition patterns.',
  ],
  asyncStates: [
    'Always render loading, empty, error, and ready states explicitly.',
    'Use retry/refresh actions where data can become stale.',
    'Keep asynchronous side effects in hooks, not inside presentational fragments.',
  ],
  actionBars: [
    'Group primary and secondary actions in predictable positions.',
    'Disable actions while saving/running and explain blocked states.',
    'Use compact labels/icons only when action intent stays unambiguous.',
  ],
  dialogs: [
    'Use modal role + clear close/cancel/save actions.',
    'Show warnings/errors in-context before destructive confirmations.',
    'Keep dialog payload preview readable and copyable for operators.',
  ],
  i18nTextPatterns: [
    'Every visible text uses t(key, englishDefault) rather than hardcoded text.',
    'Use stable key hierarchies by feature/section/tab/action.',
    'Keep machine-readable keys in English and put language variants in translation bundles.',
  ],
}
