import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { Card } from 'react-bootstrap'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'

const Services = () => {
    const serviceList = [{
      id: 1,
      name: "Digital Clock and Build",
      imageUrl: project1
   },
   {
   id: 2,
   name: "Blog App Simple",
   imageUrl: project2
},
{
  id: 3,
  name: "Digital Clock and Build",
  imageUrl: project1
}]
return (
  <motion.div 
  initial={{ scaleY: 0 }} 
  animate={{ scaleY: 1 }} 
  exit={{ scaleY: 0 }}
  transition={{ duration: 0.2 }}
  >
<div className='services'>
  <h2>Services</h2>
  <div className='wrapper'>
    {serviceList.map((item) => {
      return(
        <motion.div key={item.id} whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 }
          }}>
        <Card>
              <Card.Img varient="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
        </motion.div>
      )
    })}
  </div>
</div>
</motion.div>
)
}

export default Services