import React from 'react'
import '../../style.css'
import { DomainFilters, TechFilters, domainFilterChanged, techsFilterChanged } from './filtersSlice'
import { TechFilterIcons } from '../../data'
import { useSelector, useDispatch } from 'react-redux'
import { allSectionsExpanded } from '../sections/sectionsSlice'

const DomainFilter = ({ value: domain, onChange }) => {
  const filters = Object.keys(DomainFilters).map((key) => {    
    const value = DomainFilters[key]
    const handleClick = () => onChange(value)
    const className = value === domain ? 'domain-selected-button' : 'domain-unselected-button'
    
    console.log('a ', className, value, domain)

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
      <label className='tech-filter-label' data-checked={checked} key={tech}>
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
  const { domain, techs } = useSelector(state => state.filters)

  const dispatch = useDispatch() 

  const allSectionsAreExpanded = useSelector(state => {
    return state.sections.every(section => section.expanded)
  })

  const currentDomain = useSelector(state => state.filters.domain)
  
  const onDomainChange = (domain) =>     
    dispatch(domainFilterChanged(domain))
    
  const onTechChange = (tech, changeType) => 
    dispatch(techsFilterChanged(tech, changeType))

  const handleClick = () => 
    dispatch(allSectionsExpanded())     
  
  return (
    <div id='filters'>      
      <div className='upper-filter-bar'>
        <DomainFilter value={domain} onChange={onDomainChange} />
        {!allSectionsAreExpanded
          && <button className="expand-button" onClick={handleClick}>Expand all sections</button>
        }
      </div>
      {currentDomain !== DomainFilters.English
        && <TechFilter value={techs} onChange={onTechChange} />
      }
    </div>
  )
}
