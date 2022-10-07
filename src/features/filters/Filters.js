import React from 'react'
import '../../style.css'
import { DomainFilters, TechFilters } from './filtersSlice'
import { TechFilterIcons } from '../../data'

const DomainFilter = ({ value: domain, onChange }) => {
  const filters = Object.keys(DomainFilters).map((key) => {    
    const value = DomainFilters[key]
    const handleClick = () => onChange(value)
    const className = value === domain ? 'domain-selected-button' : 'domain-unselected-button'
    
    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <ul className='domain-list'>{filters}</ul>
  )
}


const TechFilter = ({ value: techs, onChange }) => {
  const filters = TechFilters.map((tech) => {
    const checked = techs.includes(tech)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(tech, changeType)
    }

    return (
      <label className='tech-filter-label' key={tech}>
        <input
          className='tech-filter-checkbox'
          type='checkbox'
          name={tech}
          checked={checked}
          onChange={handleChange}
        />        
        <div className="tech-filter-item">
          {TechFilterIcons[tech]}
          {tech}
        </div>
      </label>
    )
  })

  return (
    <div>
      <form className='tech-filter-form'>{filters}</form>
    </div>
  )
}

export default function Filters() {
  const domain = DomainFilters.All
  const techs = []

  const onDomainChange = (domain) => {
    console.log('domain: ', domain)
  }

  const onTechChange = (tech, changeType) => {
    console.log('tech: ', { tech, changeType })
  }
  
  return (
    <div id='filters'>      
      <div className='upper-filter-bar'>
        <DomainFilter value={domain} onChange={onDomainChange} />
        <button className="expand-button">Expand all sections</button>
      </div>
      <TechFilter value={techs} onChange={onTechChange} />
    </div>
  )
}
