import React, { useState } from 'react'

const Filter = ({ dataType, fetchData, setData }) => {
  const [value, setValue] = useState('')
  const filterData = e => {
    // Enter key
    if (e.keyCode === 13) {
      fetchData(dataType, setData, undefined, undefined, value)
    }
  }

  return (
    <div>
      <input type="text" placeholder="Filter" value={value} onChange={e => setValue(e.target.value)} onKeyDown={filterData} />
    </div>
  )
}

export default Filter
