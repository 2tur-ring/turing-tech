import { useState } from 'react'

export function TabBar({ tabs, activeTab, onChange }) {
  return (
    <div className="tabs-bar">
      {tabs.map(tab => (
        <button key={tab.key || tab} className={`tab-btn${(tab.key || tab) === activeTab ? ' active' : ''}`} onClick={() => onChange(tab.key || tab)}>
          {tab.label || tab}
        </button>
      ))}
    </div>
  )
}

export function TabPanel({ activeTab, tabKey, children }) {
  if (activeTab !== tabKey) return null
  return <div className="tab-panel active">{children}</div>
}
