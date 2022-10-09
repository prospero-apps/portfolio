import React from 'react'
import '../../style.css'
import Section from './Section'
import { useSelector, shallowEqual } from 'react-redux'

export default function Sections() {
  const sectionIds = useSelector(state => state.sections.map(section => section.id), shallowEqual)  
  
  const renderedSections = sectionIds.map((sectionId) => {
    return <Section key={sectionId} id={sectionId} />
  })

  return (
    <div id='sections'>
      {renderedSections}
    </div>
  )
}
