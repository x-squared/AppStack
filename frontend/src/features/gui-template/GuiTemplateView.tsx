import { useState } from 'react'
import { templateViewGuidance } from './docs/templateGuidance'
import TemplateSectionsTab from './tabs/TemplateSectionsTab'
import TemplateTablesTab from './tabs/TemplateTablesTab'
import './GuiTemplateView.css'

type TemplateTab = 'sections' | 'tables' | 'forms' | 'detail-tabs' | 'async-states' | 'action-bars' | 'dialogs' | 'i18n-patterns'

export default function GuiTemplateView() {
  const [tab, setTab] = useState<TemplateTab>('sections')

  return (
    <main className="gui-template-view">
      <header className="gui-template-header">
        <h1>GUI Template View</h1>
        <p>
          This DEV-only view is the reference template for building concrete GUI implementations.
          Use it first, then adapt patterns to your feature-specific logic.
        </p>
      </header>

      <section className="gui-template-section-card">
        <h2>View-level Guidance</h2>
        <ul>
          {templateViewGuidance.view.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <nav className="gui-template-tabs" aria-label="GUI template tabs">
        <button
          type="button"
          className={tab === 'sections' ? 'active' : ''}
          onClick={() => setTab('sections')}
        >
          Sections
        </button>
        <button
          type="button"
          className={tab === 'tables' ? 'active' : ''}
          onClick={() => setTab('tables')}
        >
          Tables
        </button>
        <button type="button" className={tab === 'forms' ? 'active' : ''} onClick={() => setTab('forms')}>Forms</button>
        <button type="button" className={tab === 'detail-tabs' ? 'active' : ''} onClick={() => setTab('detail-tabs')}>DetailTabs</button>
        <button type="button" className={tab === 'async-states' ? 'active' : ''} onClick={() => setTab('async-states')}>AsyncStates</button>
        <button type="button" className={tab === 'action-bars' ? 'active' : ''} onClick={() => setTab('action-bars')}>ActionBars</button>
        <button type="button" className={tab === 'dialogs' ? 'active' : ''} onClick={() => setTab('dialogs')}>Dialogs</button>
        <button type="button" className={tab === 'i18n-patterns' ? 'active' : ''} onClick={() => setTab('i18n-patterns')}>i18nTextPatterns</button>
      </nav>

      {tab === 'sections' ? <TemplateSectionsTab /> : null}
      {tab === 'tables' ? <TemplateTablesTab /> : null}
      {tab === 'forms' ? (
        <section className="gui-template-section-card">
          <h3>Forms</h3>
          <ul>{templateViewGuidance.forms.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="gui-template-field-grid">
            <label className="gui-template-field"><span>PID *</span><input value="P-240100" readOnly /></label>
            <label className="gui-template-field"><span>First name *</span><input value="Erika" readOnly /></label>
          </div>
        </section>
      ) : null}
      {tab === 'detail-tabs' ? (
        <section className="gui-template-section-card">
          <h3>DetailTabs</h3>
          <ul>{templateViewGuidance.detailTabs.map((item) => <li key={item}>{item}</li>)}</ul>
          <nav className="detail-tabs">
            <button type="button" className="detail-tab active">Patient</button>
            <button type="button" className="detail-tab">Episodes</button>
            <button type="button" className="detail-tab">Medical</button>
          </nav>
        </section>
      ) : null}
      {tab === 'async-states' ? (
        <section className="gui-template-section-card">
          <h3>AsyncStates</h3>
          <ul>{templateViewGuidance.asyncStates.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="gui-template-state-grid">
            <div><strong>Loading</strong><p>Loading...</p></div>
            <div><strong>Empty</strong><p>No rows found.</p></div>
            <div><strong>Error</strong><p>Could not load data. Retry.</p></div>
            <div><strong>Ready</strong><p>Data loaded.</p></div>
          </div>
        </section>
      ) : null}
      {tab === 'action-bars' ? (
        <section className="gui-template-section-card">
          <h3>ActionBars</h3>
          <ul>{templateViewGuidance.actionBars.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="gui-template-action-row">
            <button type="button">Primary action</button>
            <button type="button">Secondary action</button>
            <button type="button" disabled>Disabled action</button>
          </div>
        </section>
      ) : null}
      {tab === 'dialogs' ? (
        <section className="gui-template-section-card">
          <h3>Dialogs</h3>
          <ul>{templateViewGuidance.dialogs.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="gui-template-dialog-box">
            <strong>Preview dialog</strong>
            <p>Dialogs should always provide safe cancel and clear action intent.</p>
          </div>
        </section>
      ) : null}
      {tab === 'i18n-patterns' ? (
        <section className="gui-template-section-card">
          <h3>i18nTextPatterns</h3>
          <ul>{templateViewGuidance.i18nTextPatterns.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      ) : null}
    </main>
  )
}
