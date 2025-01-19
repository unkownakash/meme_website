import React from 'react'
import './Main.css'

import { FaArrowLeft } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Contact } from './Contact';

export const Main = () => {
  return (
    <>
      <div id='main'>
        <div id="left">
          <div id="lnav">
            <FaArrowLeft />
            <div id="lnavr">
              <div>
                {/* <Link to={Contact}>Home</Link> */}
                <a href="">Home</a>
                <a href="">work</a>
              </div>
              <div id='bird'>
                <IoLogoTwitter />
              </div>
            </div>

            <div id="textcenter">
              <h1>
                
                MEME,
                Generator

                

                

              </h1>
             
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis illum, quia ex magni totam recusandae maiores exercitationem harum at odio a architecto itaque veniam veritatis officiis et facilis dolores. Modi.</p>
              <button>Generate Now</button>


            </div>
          </div>
        </div>
        <div id='right'>
          <div id="rtop">
            <div id='rtop-left'>

            </div>
            <div id='rtop-right' >


            </div>
          </div>
          <div id="rbot"></div>

        </div>
      </div>
    </>
  )
}
