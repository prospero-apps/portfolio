import React from 'react'
import '../style.css'
import face from '../images/head.png'
import { BsGithub } from 'react-icons/bs'

// icons
// import { BsFacebook, BsGithub, BsTelephone } from 'react-icons/bs'
// import { AiFillAmazonCircle, AiFillHtml5, AiOutlineMail } from 'react-icons/ai'
// import { SiUdemy, SiSkillshare, SiTypescript, SiReact, SiRedux, SiExpress, SiJest, SiWebpack, SiPython, SiBlender } from 'react-icons/si'
// import { IoLogoYoutube } from 'react-icons/io'
// import { DiCss3, DiMongodb } from 'react-icons/di'
// import { TbBrandJavascript } from 'react-icons/tb'
// import { FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa'




export default function Header() {
  return (
    <div id='header'>      
      <div className="personal-info">
        <h1>Kamil Pakula - About me</h1>        
        <p>For the last couple months I've been learning web development along with the Odin Project and here I'm presenting the web projects I've created during that period of time.</p>        
        <p>The web projects below are in the order I completed them, starting from very basic ones.</p>  
        <p>I'm also presenting some stuff I created before using other technologies.</p>      
        <div className="personal-info-links">
          <a href="https://github.com/prospero-apps" target="blank">
            <BsGithub className='github-icon' /> Github
          </a>
        </div>        
      </div>
      <img className='face-image' src={face} alt="face" />
    </div>
  )
}
