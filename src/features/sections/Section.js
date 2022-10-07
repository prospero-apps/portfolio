import React from 'react'
import '../../style.css'
import Item from './Item'

export default function Section({ section }) {
  const items = section.items
  console.log(items)  

  const renderedItems = items.map((item) => {
    return <Item key={item.id} item={item} />
  })

  return (
    <div className='section'>
      <div className="section-bar">
        <h1>{section.sectionName}</h1>        
        <button className="expand-button">
          {section.expanded
            ? <span>Collapse section</span>
            : <span>Expand section</span>
          }
        </button>        
      </div>
      <div className="item-list">{renderedItems}</div>
    </div>
  )
}
