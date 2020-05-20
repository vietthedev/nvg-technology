import React from 'react'

import RecipeListItem from './recipe-list-item'

const RecipeList = ({ recipes, fetchData, setData }) => (
  <div>
    {recipes.recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        description={recipe.description}
        fetchData={fetchData}
        setData={setData}
      />
    ))}
  </div>
)

export default RecipeList
