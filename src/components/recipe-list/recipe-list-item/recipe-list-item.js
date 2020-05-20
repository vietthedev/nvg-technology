import React from 'react'

import styles from './recipe-list-item.module.css'

const handleClick = async (id, fetchData, setData) => {
  if (window.confirm('Are you sure you want to delete this recipe?')) {
    await fetch(`http://localhost:8081/recipes/${id}`, { method: 'DELETE' })
    fetchData('recipes', setData)
  }
}

const RecipeListItem = ({ id, title, description, fetchData, setData }) => (
  <div className={styles.item}>
    <h3>{title}</h3>
    <div className={styles.description}>{description}</div>
    <button type="button" className={styles.deleteButton} onClick={() => handleClick(id, fetchData, setData)}>Delete</button>
  </div>
)

export default RecipeListItem
