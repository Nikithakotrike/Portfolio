import headshot from '/src/images/Head shot Image.jpeg';
import aes from '/src/images/Asthetic Image.jpeg';
import passion from '/src/images/Passion Image.jpeg';

import './Blog.css';
function Blog() {
    return (
      <div className="fullHeightContainer1 flex flex-col text-center ">
      <div className="image">
       <img className="img" src = {headshot}></img>
       <div className='text'></div>
       <p className='text-centre pt-20 animate-fade-left'> This is a simple head shot image with a warm smile and approachable demeanor  
        which has a clean, white background which  enhances has the  natural lighting that brings warm tones and also captures a sense of 
        warmth, ideal for a personal blog in an portfolio
         </p>
          </div>

          <div className="image">
       <div className='text'></div>
       <p className='text-centre pt-20 animate-fade-right'>This Image displays more about myself and what I am passionate about,
         Even though I am ambivert major part of me is an introvert and I love reading books,Art and Coloring
          and I like like outdoors which are calm and peaceful  so this picture is a statement about everything I am
          and this picture  has been shot in the backyard of my university of accomoidation  where I stay and
          and the day I took the photo was perfect to splash some color enjoying the sunny wether  and chilling  at my
          backyard .</p>
          <img className="img" src = {passion}></img>
          </div>

          <div className="image">
       <img className="img" src = {aes}></img>
       <div className='text'></div>
       <p className='text-centre  pt-20 animate-fade-left'>As an outdoor person who enjoys  nature a lot I also beleive that 
          nature is beautiful all the time I feel the image is asthetic as it has an Bold and contrasting colors which are  balanced well, 
          and  the natural light has also  enhanced the image,giving it a warm, nostalgic feeling, and also capturing the element of
          Sunlight falling in between from the leaves makes the image  naturally contributing it to an sense of beauty.
       </p>
          </div>

      </div>
    
    );
  }
  
  export default Blog;