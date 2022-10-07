import React from 'react'
import '../../style.css'
import { TechFilterIcons, LinkIcons } from '../../data'

export default function Item({ item }) {
  return (
    <div className='item'>
      <div className="item-main">
        <img className='item-image' src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
        <div className="item-technologies">
          {item.technologies.map(technology => {
            return (
              <div>{TechFilterIcons[technology]}</div>
            )
          })}
        </div>
        <p>{item.description}</p>
      </div>
      <div className="item-links">
        {item.links.map(link => {
          return (
            <a href={link.url} target='blank'>
              {LinkIcons[link.destination]}
              {link.destination}
            </a>
          )          
        })}
      </div>
    </div>
  )
}
