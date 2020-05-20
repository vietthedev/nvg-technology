import React, { useState, useEffect } from 'react';

import Content from '../content'
import Filter from '../filter'
import RecipeList from '../recipe-list'
import Paginator from '../paginator'

const fetchData = async (dataType, setData, page = 1, pageSize = 5, search = '') => {
  const response = await fetch(`http://localhost:8081/${dataType}?search=${search}&page=${page}&pageSize=${pageSize}`)
  const data = await response.json()

  setData(data)
}

const App = () => {
  const [recipes, setRecipes] = useState({ recipes: [] })

  useEffect(() => {
    fetchData('recipes', setRecipes)
  }, [])

  return (
    <Content>
      <h2>
        Recipes Overview
      </h2>
      <Filter dataType="recipes" fetchData={fetchData} setData={setRecipes} />
      <RecipeList recipes={recipes} fetchData={fetchData} setData={setRecipes} />
      <Paginator data={recipes} dataType="recipes" fetchData={fetchData} setData={setRecipes} />
    </Content>
  )
}

export default App;
