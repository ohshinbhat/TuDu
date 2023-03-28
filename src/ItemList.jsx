import React from 'react';
import './index.css'
import LineItem from './LineItem';

export const ItemList = ({items, handleCheck, handleDelete}) => {
  return (

    <ul>
        {items.map((item) =>(
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />
            
            ))}
    </ul>

  )
}
