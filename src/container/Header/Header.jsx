import React from 'react'

import { motion } from 'framer-motion'

import { images } from '../../constants'

import './Header.scss'

import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >

        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}></div>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text" style={{marginLeft: 7}}>Tomás</h1>
          </div>

          <div className="tag-cmp app__flex">
            <p className="">Full Stack Developer</p>
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">Backend Developer</p>
          </div>

        </div>

      </motion.div>

      <motion.div
      whileInView={{opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      >
        <img src={images.web1} alt="profile-bg" />
        <motion.img 
         whileInView={{scale: [0, 1] }}
         transition={{ duration: 1, ease: 'easeInOut' }}
         src={images.circle}
         alt="profile_circle"
         className="overlay_circle"
         />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')