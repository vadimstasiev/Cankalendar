import { useState } from 'react'

function ColumnTitle({ allowRenameColumn, onClick, children: title }) {
  return allowRenameColumn ? (
    <span style={{ cursor: 'pointer' }} onClick={onClick}>
      {title}
    </span>
  ) : (
    <span>{title}</span>
  )
}

function useRenameMode(state) {
  const [renameMode, setRenameMode] = useState(state)

  function toggleRenameMode() {
    setRenameMode(!renameMode)
  }

  return [renameMode, toggleRenameMode]
}

export default function ({ children: column, allowRemoveColumn, onColumnRemove, allowRenameColumn, onColumnRename }) {
  const [renameMode, toggleRenameMode] = useRenameMode(false)
  const [titleInput, setTitleInput] = useState('')

  function handleRenameColumn(event) {
    event.preventDefault()

    onColumnRename(column, titleInput)
    toggleRenameMode()
  }

  function handleRenameMode() {
    setTitleInput(column.title)
    toggleRenameMode()
  }

  return (
    <div className='react-kanban-column-header'>
      {renameMode ? (
        <form onSubmit={handleRenameColumn}>
          <span>
            <input
              className='dark:bg-zinc-900 px-2 py-1 m-0 rounded-xl'
              type='text'
              value={titleInput}
              onChange={({ target: { value } }) => setTitleInput(value)}
              autoFocus
            />
          </span>
          <span>
            <button className='react-kanban-column-header__button ml-3 px-2 py-1 rounded-xl dark:bg-zinc-900 dark:text-white' type='submit'>
              Rename
            </button>
            <button className='react-kanban-column-header__button ml-3 px-2 py-1 rounded-xl dark:bg-zinc-900 dark:text-white' type='button' onClick={handleRenameMode}>
              Cancel
            </button>
          </span>
        </form>
      ) : (
        <>
          <ColumnTitle allowRenameColumn={allowRenameColumn} onClick={handleRenameMode}>
            {column.title}
          </ColumnTitle>
          {allowRemoveColumn && <span onClick={() => onColumnRemove(column)}>×</span>}
        </>
      )}
    </div>
  )
}
