import React from 'react'
import '../../style.css'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import logoCoder from '../../images/logos/Logo Prospero Coder.png'
import logoEnglish from '../../images/logos/Logo Prospero English.png'
import ytCoder from '../../images/YT-channels/Prospero Coder YT Banner.png'
import ytBlender from '../../images/YT-channels/Prospero Blender YT Banner.png'
import ytEnglish from '../../images/YT-channels/Prospero English YT Banner.png'

export default function Footer() {
  return (
    <div id='footer'>      
      <div className="blog-and-YT">
        <h1>Join me on my blogs and YouTube channels</h1>
        <div className="blog-and-YT-links">
          <div className="coding">
            <h2>Coding</h2>
            <a href="https://prosperocoder.com" target="blank">
              <img src={logoCoder} alt="Prospero Coder Blog" />
              Prospero Coder Blog
            </a>
            <a href="https://www.youtube.com/c/ProsperoCoder" target="blank">
              <img src={ytCoder} alt="Prospero Coder YouTube Channel" />
              Prospero Coder YouTube Channel
            </a>
            <a href="https://www.youtube.com/c/ProsperoBlender" target="blank">
              <img src={ytBlender} alt="Prospero Blender YouTube Channel" />
              Prospero Blender YouTube Channel
            </a>
          </div>
          <div className="english">
            <h2>English</h2>
            <a href="https://prosperoenglish.com" target="blank">
              <img src={logoEnglish} alt="Prospero English Blog" />
              Prospero English Blog
            </a>
            <a href="https://www.youtube.com/c/ProsperoEnglish" target="blank">
              <img src={ytEnglish} alt="Prospero English YouTube Channel" />
              Prospero English YouTube Channel
            </a>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1>Contact me</h1>
        <div className="contact-info">
          <div><AiOutlineMail /> prosperocoder@gmail.com</div>
          <div><BsTelephone /> +48 501 360 185</div>       
        </div>
      </div>
    </div>
  )
}
