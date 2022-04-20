import { useRef } from 'react'
import { when } from '../../../../../../../../services/utils'

function CardForm({ onConfirm, onCancel }) {
  const inputCardTitle = useRef()
  const inputCardDescription = useRef()

  function addCard(event) {
    event.preventDefault()
    when(inputCardTitle.current.value)((value) => {
      onConfirm({ title: value, description: inputCardDescription.current.value })
    })
  }

  return (
    <div className='react-kanban-card-adder-form dark:bg-zinc-900'>
      <form onSubmit={addCard}>
        <input
          className='react-kanban-card-adder-form__title dark:bg-zinc-900'
          name='shit'
          autoFocus
          defaultValue='Title'
          ref={inputCardTitle}
        />
        <input
          className='react-kanban-card-adder-form__description dark:bg-zinc-900'
          name='description'
          defaultValue='Description'
          ref={inputCardDescription}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <button className='react-kanban-card-adder-form__button dark:bg-zinc-800' type='submit'>
            Add
          </button>
          <button className='react-kanban-card-adder-form__button dark:bg-zinc-800' type='button' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
