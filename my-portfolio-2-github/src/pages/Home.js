import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='home'>
      <motion.div className='name' initial={{ x: -300, scale: 0.5}} animate={{x: 0, scale: 1}} transition={{duration: 1}}>
        Shakib <font>Khan</font>
      </motion.div>
      <motion.div className='desc' initial={{ x: 300, scale: 0.5}} animate={{x: 0, scale: 1}} transition={{duration: 1}}>
        <font>Web Developer</font> and <font>I Am Child</font> Of 13 Years old
      </motion.div>
    </div>
  )
}

export default Home