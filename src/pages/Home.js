import React from 'react'
import '../style.css'
import Item from '../components/Item'


import { BsFacebook, BsGithub, BsTelephone } from 'react-icons/bs'
import { AiFillAmazonCircle, AiFillHtml5, AiOutlineMail } from 'react-icons/ai'
import { SiUdemy, SiSkillshare, SiTypescript, SiReact, SiRedux, SiExpress, SiJest, SiWebpack, SiPython, SiBlender } from 'react-icons/si'
import { IoLogoYoutube, IoLogoFirebase } from 'react-icons/io'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaNodeJs, FaGitAlt, FaNpm, FaFlagUsa } from 'react-icons/fa'

export default function Home() {
  return (
    <div id='home'>
      <div className="tech-filter">
        <input id='filter-all' type="radio" name='technology' className='tech-radio' value='all' />
        <label htmlFor='filter-all' className="tech-label">          
          ALL
        </label>

        <input id='filter-html' type="radio" name='technology' className='tech-radio' value='html' />
        <label htmlFor='filter-html' className="tech-label">          
          <AiFillHtml5 className='tech-icon' />
          HTML
        </label>

        <input id='filter-react' type="radio" name='technology' className='tech-radio' value='react' />
        <label htmlFor='filter-react' className="tech-label">          
          <SiReact className='tech-icon' />
          REACT
        </label>
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}
