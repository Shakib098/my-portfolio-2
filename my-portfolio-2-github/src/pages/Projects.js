import React from 'react'
import { motion } from 'framer-motion'
import { Card } from 'react-bootstrap'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'
import project6 from '../images/project6.png'

const Projects = () => {
   const projectList = [{
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
name: "My Portfolio and Build",
  imageUrl: project3
},
{
  id: 4,
  name: "Multiplication App For Child and Build",
  imageUrl: project4
},
{
  id: 5,
  name: "Social Reviws and Build",
  imageUrl: project5
},
{
  id: 6,
  name: "Color Flipper and Build",
  imageUrl: project6
}]

  return (
    <motion.div className='projects' animate={{
      scale:[2,1],
      rotate:[90,0]
      }}
      transiton={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      >
      <h2>Projects</h2>
      <div className='wrapper'>
        {projectList.map((item) => {
          return (
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
    </motion.div>
  )
}

export default Projects