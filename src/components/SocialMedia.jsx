import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/tomaslaus" target="_blank" className="app__social">
                <BsLinkedin/>
            </a>
        </div>
        <div>
        <a href="mailto:tomaslaus99@gmail.com" className="app__social">
                <SiGmail/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia