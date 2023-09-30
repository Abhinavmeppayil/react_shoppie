import React from 'react'
import '../Style/Home.css'
import vg from '../assets/2.webp'
import {FaGoogle} from 'react-icons/fa'
import {FaAmazon} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram}  from 'react-icons/fa'
 const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        
        <main>
            <h1>TechyStar</h1>
            <p style={{color:'white'}}>Solution to all your problem</p>
        </main>
    </div>


    <div className='home2'>
        <img src={vg} alt=''></img>
        <div className='para'>
            <p className='parahom2' style={{color:'white'}}>
                We are your one and only solution to the tech problem
                you face every day.

                we are leading tech company whose aim is to increase
                the problem solving ability in children


            </p>
        </div>

    </div>

    <div className='home3' id='about'>
        <div className='childhome3'>
            <h1 className='hofhome3'>Who we Are</h1>
            <p className='parahome3'>
                We are a team of 4 people who have been 
                working together for over two years now,
                 with our goal being to solve problems that many students face
                 
                 We are a team of 4 people who have been 
                working together for over two years now,
                 with our goal being to solve problems that many students face
                 
                 We are a team of 4 people who have been 
                working together for over two years now,
                 with our goal being to solve problems that many students face
                 
                 We are a team of 4 people who have been 
                working together for over two years now,
                 with our goal being to solve problems that many students face
                 
                 We are a team of 4 people who have been 
                working together for over two years now,
                 with our goal being to solve problems that many students face
                 

            </p>
        </div>
    </div>

    <div className='home4' style={{color:'black'}} id='brands'>
        <div className='home4container'>
            <h1  className='headhome4'>Brands</h1>
            <article>
                <div style={{animationDelay:'0.5s'}}>
                
               <FaGoogle/>
               <p >Google</p>

               </div>



               <div style={{animationDelay:'0.7s',}}>
                
            <FaAmazon/>
               <p>Amazone</p>

               </div>

               
               <div style={{animationDelay:'0.9s'}}>
                
            <FaYoutube/>
               <p className='pp'>Youtube</p>

               </div>
               <div style={{animationDelay:'0.9s'}}>
                
                <FaInstagram/>
                   <p>Instagram</p>
    
                   </div>
            </article>
           
        </div>
        

    </div>
    

    </>
  )
}

export default Home