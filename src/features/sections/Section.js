import React from 'react'
import '../../style.css'
import Item from './Item'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { DomainFilters } from '../filters/filtersSlice'
import { sectionExpandedOrCollapsed } from './sectionsSlice'

const selectSectionById = (state, sectionId) => {
  return state.sections.find(section => section.id === sectionId)
}

export default function Section({ id }) {
  const section = useSelector(state => selectSectionById(state, id))
  const items = section.items
  const dispatch = useDispatch()  
  const currentDomain = useSelector(state => state.filters.domain)
  

  const currentTechs = useSelector(state => state.filters.techs)

  const itemsToRenderByDomain = items.filter(item => {
    switch (currentDomain) {
      case DomainFilters.Coding: {
        if (item.technologies.includes('english')) {
          break
        }
        return item
      }
      case DomainFilters.English: {
        if (!item.technologies.includes('english')) {
          break
        }
        return item
      }
      default:
        return item
    }
  })

  const itemsToRenderByCategory = itemsToRenderByDomain.filter(item => {
    if (currentDomain === DomainFilters.English) {
      return item.technologies.includes('english')
    }
    return currentTechs.every((element) => item.technologies.includes(element))
  })
  
  const renderedItems = itemsToRenderByCategory.map((item) => {
    return <Item key={item.id} item={item} />
  })
  
  const handleClick = () => 
    dispatch(sectionExpandedOrCollapsed(section.id))    
  
  return (
    <div className='section'>
      { itemsToRenderByCategory.length > 0 &&
        <div className="section-bar">
          <h1>{`${section.sectionName} (${itemsToRenderByCategory.length})`}</h1> 
          <button className="expand-button" onClick={handleClick}>
            {section.expanded
              ? <IoIosArrowUp className='arrow'/>
              : <IoIosArrowDown className='arrow' />
            }
          </button>   
        </div>
      }
      {section.expanded
        ? <div className="item-list">{renderedItems}</div>
        : <div className='dots'>...</div>
      }      
    </div>
  )  
}
