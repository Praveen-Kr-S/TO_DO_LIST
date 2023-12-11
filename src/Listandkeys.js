import React from 'react'
import ItemsList from "./ItemsList"

const Listandkeys = ({items, handleCheck, handleDelete}) => {

  return (
      <main>
        {(items.length) ? (
            <ItemsList
              items ={items}
              handleCheck = {handleCheck}
              handleDelete = {handleDelete}
            />
        ) : (
          <p style={{ marginTop: '2rem', color: 'red'}}>Your list is empty</p>
        )
        }
      </main>
  )
}

export default Listandkeys