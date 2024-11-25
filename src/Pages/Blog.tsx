import headshot from '/src/images/Head shot Image.jpeg';
import aes from '/src/images/Asthetic Image.jpeg';
import passion from '/src/images/Passion Image.jpeg';

import './Blog.css';
function Blog() {
    return (
      <div className="fullHeightContainer flex flex-col text-center ">
      <div className="image">
       <img className="img" src = {headshot}></img>
       <div className='text'></div>
       <p className='text-center pt-20 animate-fade-left'> This is a simple head shot image with a warm smile and approachable demeanor  
                                                             which has a clean, white background which  enhances has the  natural lighting 
                                                             that brings warm tones and also captures a sense of warmth, ideal for a personal 
                                                             blog in an portfolio.
         out warm tones.
         </p>
          </div>

          <div className="image">
       <div className='text'></div>
       <p className='text-centre pt-20 animate-fade-right'>This Image displays more about myself and what I am passionate about,
         Even though I am ambivert major part of me is an introvert and I love reading books,Art and Coloring
          and I like like outdoors which are calm and peaceful  so this picture is a statement about everything I am
          and this picture  has been shot in the backyard of my university of accomoidation  where I stay and
          The when I took the photo it day has perfect wether to color enjoying sun and sit and chill at your
          backyard .</p>
          <img className="img" src = {passion}></img>
          </div>

          <div className="image">
       <img className="img" src = {aes}></img>
       <div className='text'></div>
       <p className='tect-centre  pt-20 animate-fade-left'>As I am person who likes outdoors and enjoy nature a lot and beleive that the 
          nature is beautiful all the time I feel the image is asthetic as it has an Bold and contrasting colors which are  balanced well, 
          and  the natural light has also  enhanced the image,giving it a warm, nostalgic feeling, and also the capturing the element of
          Sunlight falling in between from the leaves makes the image  naturally contributing it to an sense of beauty.
       </p>
          </div>

          <div className="image">
       <div className='text'></div>
       <p className='tect-centre  pt-20 animate-fade-right'>In this blog, I’ll share the journey behind creating this video, how our team collaborated, and the focus of the video: an app called Back Track, which helps users discover historical places in Ireland and explore them .My Key role in the project was to ensure continuity, which involved maintaining the flow and consistency across different shots during filming and verifying that it was 
       also maintained  after editing, ensuring there were no mistakes.After the planning phase, all of us came up with different ideas, and once everything was finalized, I reviewed the storyboard with my teammates and ensured that the timing of every scene in the storyboard matched our expectations to avoid any inconsistencies in the video. We also made sure the video could be completed within the specified duration.​
       During the shooting phase, I was checking for consistent lighting, character positioning, costumes, body language of the actors, and the progression of the storyline.​
       One of my  biggest challenges was maintaining continuity during re-shoots, as many scenes were re-shot 2–3 times to get them perfect. To overcome this, I made detailed notes for each shot, including camera angles, positions, dialogue delivery, and the timing of every scene. This helped me replicate the setup accurately when retaking shots. It was particularly challenging to note all the scene timings and ensure continuity simultaneously.​
       By focusing on continuity, I contributed to making the final video feel professional and polished for the app demonstration.​
       I learned a lot from the project. Specifically, this role emphasized the importance of attention to detail and how even small inconsistencies can significantly affect a project’s overall impact. It also enhanced my teamwork and problem-solving skills as I collaborated closely with my teammates during the editing phase to achieve the desired results. In the end, all of us were happy with the outcome.​
       </p>
       <iframe width="460" height="300" src="https://www.youtube.com/embed/0qP28CRNnOQ?si=12lh6jhFLnx6r-RL" title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          
      </div>
    
    );
  }
  
  export default Blog;
