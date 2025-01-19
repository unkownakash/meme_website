import React from 'react';
import './Guide.css'
export const Guide = () => {
  return (
    <>
    <div id='mainoo' className='bg-gray-50'>
        <div id='box1'>
            
            <h1 >How To Create Meme </h1>
        </div>
        <div id='box2'>
            <div id='step1'>
                <p className='blu'>Step 1:Upload an Image</p>
                <p className='bot'> Drop an image or select a template to begin </p>
            </div>
            <div id='step1'>
                <p className='blu'>Step 2:Add text </p>
                <p className='bot'>Customize your meme with top text and buttom text  </p>
            </div>
            <div id='step1'>
                <p className='blu'>Step 3:Download</p>
                <p className='bot'>Last Step Click Download Button  </p>
            </div>
            
        </div>
    </div>
    </>
  );
};
