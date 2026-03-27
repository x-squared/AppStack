import { templateViewGuidance } from '../docs/templateGuidance'

export default function TemplateSectionsTab() {
  return (
    <section className="gui-template-tab-panel" aria-label="Sections template examples">
      <article className="gui-template-section-card">
        <header>
          <h3>Section Container Example</h3>
          <p>
            This card models a reusable section panel similar to recipients detail sections.
            It demonstrates clear separation between heading, content, and action area.
          </p>
        </header>
        <div className="gui-template-section-body">
          <p><strong>When to use:</strong> For independent content blocks inside one view.</p>
          <p><strong>How to implement:</strong> Keep section rendering focused and pass pre-derived props.</p>
        </div>
      </article>

      <article className="gui-template-section-card">
        <header>
          <h3>Filter Section Example</h3>
          <p>
            Demonstrates a compact filter bar section. In production, state lives in a view-model hook,
            while this section only renders controlled inputs and callbacks.
          </p>
        </header>
        <div className="gui-template-section-body">
          <label className="gui-template-field">
            Search
            <input type="text" value="Recipient name" readOnly />
          </label>
          <label className="gui-template-field">
            Status
            <select value="Active" disabled>
              <option>Active</option>
            </select>
          </label>
        </div>
      </article>

      <article className="gui-template-section-card">
        <header>
          <h3>Implementation Checklist</h3>
        </header>
        <ul>
          {templateViewGuidance.sections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
