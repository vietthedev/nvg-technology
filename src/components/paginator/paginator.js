import React from 'react'

import styles from './paginator.module.css'

const Paginator = ({ data, dataType, fetchData, setData }) => {
  const handleClick = page => fetchData(dataType, setData, page)

  return (
    <ul className={styles.paginator}>
      {[...Array(data.totalPages).keys()].map(page => (
        <li
          key={page}
          className={`${styles.paginatorItem} ${(page + 1) === data.currentPage ? styles.active : ''}`}
          onClick={() => handleClick(page + 1)}
        >
          {page + 1}
        </li>
      ))}
    </ul>
  )
}

export default Paginator
