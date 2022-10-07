import React from 'react'
import '../../style.css'
import Section from './Section'
import { useSelector } from 'react-redux'

const selectSections = state => state.sections

export default function Sections() {
  const sections = useSelector(selectSections)  
  // console.log(sections)

  const renderedSections = sections.map((section) => {
    return <Section key={section.id} section={section} />
  })

  return (
    <div id='sections'>
      {renderedSections}
    </div>
  )
}
