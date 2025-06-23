import SearchPanel from '../CreateForm/SearchPanel'
import './AppHeader.css'

function AppHeader({ onAdd }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <SearchPanel onAdd={onAdd} />
    </header>
  )
}

export default AppHeader
