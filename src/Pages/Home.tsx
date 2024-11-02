import "./Home.css"
import img1 from '/src/images/C2.jpg';
function Home() {
    return (
    
         <div className="fullHeightContainer">
            <section className="home" id="Home"></section>
            <div className="home-container container"></div>
            <div className="home -left"></div>
        <div className="animated-title">
          <div className="text-container">
          <div className="text-top">Hello,</div>
          </div>
          <div className="text-container">
          <div className="text-bottom ">World. </div>
          </div>
          <div className="text-container">
          <div className="text-last">Hi,I am Nikitha </div>
          </div>
          <div className="text-container">
          <div className="text-last">It's super nice to meet you , I am a BI Developer and student pursuing  Interaction and 
                                     Expeience Design  </div>
          </div>
          <div className="text-container">
          <div className="text-last"> and living in Limerick,Ireland.To know me more and my work go to the About page I love 
                                      designing  </div>
                                      
          </div>
          <div className="text-container">
          <div className="text-last"> for a more human and empathetic world..   </div>

          </div>
        </div>
        <div className="home-right"></div>
        <div className = "home-img-box1">
        <img className="img1" src = {img1}></img>
        </div>
      </div>
      
    );
  }
  
  export default Home;