import { templateViewGuidance } from '../docs/templateGuidance'
import { templateRecipientRows } from '../model/templateDummyData'

export default function TemplateTablesTab() {
  return (
    <section className="gui-template-tab-panel" aria-label="Tables template examples">
      <article className="gui-template-section-card">
        <header>
          <h3>Recipients-style List Table Example</h3>
          <p>
            This table mirrors the recipients list pattern: clear columns, simple statuses, and
            one dedicated action column.
          </p>
        </header>
        <div className="gui-template-table-wrap">
          <table className="gui-template-table">
            <thead>
              <tr>
                <th>PID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Blood type</th>
                <th>Status</th>
                <th aria-label="Open details" />
              </tr>
            </thead>
            <tbody>
              {templateRecipientRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.pid}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.bloodType}</td>
                  <td>{row.status}</td>
                  <td className="gui-template-action-col">
                    <button type="button" disabled>
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <article className="gui-template-section-card">
        <header>
          <h3>Implementation Checklist</h3>
        </header>
        <ul>
          {templateViewGuidance.tables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
