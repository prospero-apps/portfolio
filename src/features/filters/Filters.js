import React from 'react'
import '../../style.css'


import { BsFacebook, BsGithub, BsTelephone } from 'react-icons/bs'
import { AiFillAmazonCircle, AiFillHtml5, AiOutlineMail } from 'react-icons/ai'
import { SiUdemy, SiSkillshare, SiTypescript, SiReact, SiRedux, SiExpress, SiJest, SiWebpack, SiPython, SiBlender } from 'react-icons/si'
import { IoLogoYoutube, IoLogoFirebase } from 'react-icons/io'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaNodeJs, FaGitAlt, FaNpm, FaFlagUsa } from 'react-icons/fa'

export default function Filters() {
  return (
    <div id='filters'>      
      <div className='upper-filter-bar'>
        <div className="domain-filters">
          <input id='domain-filter-all' type="radio" name='domain' className='domain-radio' value='all' checked />
          <label htmlFor='domain-filter-all' className="domain-label">
            All
          </label>
          <input id='domain-filter-coding' type="radio" name='domain' className='domain-radio' value='coding' />
          <label htmlFor='domain-filter-coding' className="domain-label">
            Coding
          </label>
          <input id='domain-filter-english' type="radio" name='domain' className='domain-radio' value='english' />
          <label htmlFor='domain-filter-english' className="domain-label">
            English
          </label>
        </div>
        <div className="all-expanded">
          <button className="expand-button">Expand all sections</button>
        </div>
      </div>
      <div className="tech-filter">

      </div>
    </div>
  )
}
