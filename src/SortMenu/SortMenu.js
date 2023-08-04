import '../SortMenu/SortMenu.css'

function SortMenu({ onCategoryChange }) {
  return (
    <div className="sort-menu">
       <label htmlFor="sort-menu">SORT BY </label>
      <select onChange={(event) => onCategoryChange(event.target.value)}>
        <option value="">Select a category</option>
        <option value="world">World</option>
        <option value="usa">USA</option>
        <option value="today">Today</option>
        <option value="all">All News</option>
      </select>
    </div>
  )
}

export default SortMenu;