export default function ConsoleMockup({ title, kpis, chats }) {
  return (
    <div className="console">
      <div className="console-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="console-title mono">{title}</span>
      </div>
      <div className="console-body">
        {kpis && <div className="console-kpis">
          {kpis.map((k, i) => (
            <div key={i} className="console-kpi">
              <div className="label">{k.label}</div>
              <div className="value">{k.value}</div>
              <div className="bars">
                {k.bars?.map((h, j) => <span key={j} style={{ height: `${h}%` }} className={j === k.bars.length - 1 ? 'up' : ''} />)}
              </div>
            </div>
          ))}
        </div>}
        {chats && <div className="console-chat">
          {chats.map((c, i) => (
            <div key={i} className="row">
              <div className={`avatar mono${c.role === 'user' ? ' user' : ''}`}>{c.avatar}</div>
              <div className={`bubble${c.typing ? ' typing' : ''}`} dangerouslySetInnerHTML={{ __html: c.text }} />
            </div>
          ))}
        </div>}
      </div>
    </div>
  )
}
