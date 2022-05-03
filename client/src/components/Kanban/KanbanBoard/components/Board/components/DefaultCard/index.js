export default function ({ children: card, dragging, allowRemoveCard, onCardRemove, OpenCard,  }) {
  return (
    <div className={`react-kanban-card dark:bg-zinc-900 rounded-xl shadow-md ${dragging ? 'shadow-2xl' : ''}`}>
      <span>
        <div className='react-kanban-card__title'>
          <span>{card.title}</span>
          {allowRemoveCard && (
            <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
              ×
            </span>
          )}
          {OpenCard && <OpenCard card={card} />}
        </div>
      </span>
      <div className='react-kanban-card__description'>{card.description}</div>
    </div>
  )
}

