import img2 from '/src/images/AM2.jpg';
import './About.css';
function About() {
  return (
    <div className="about-container">
    <section className="About" id="About"></section>
    <div className="About-container container">
            <div className="About-Left"></div>
           <div className = "About-img-box1"></div>
           <img className="imgA" src = {img2}></img>

    <div className="About-Right"></div>
      <header className="about-header"> 
      </header>
      <div className="about-content">
        <h2>About me</h2>
        <p>
          Hey All,
          I am Nikitha and I am Ambivert,Cynophilist and also intrested in Art and Design, In my free time you 
          can find me Coloring ,Enjoying in outdoors,listening to Music and Reading Books or Travelling and Exploring 
          new places.I have an bachelors Degree in CSIT and worked as an BI developer .I am passionate about Research,
          Data Analysis,Design in my professional life which made me more intriuged in getting to pursue Msc in Interaction 
          and experience design.I am ardent about solving problems by design and giving User Centric Solutions.
          </p>
        
        <h2>Work Experience and Projects</h2>
        <p>
         I have 6 years of Work Experience as an BI Developer.My Day to  day Work activities include Analysing ,Processing and 
         Cleaning of the data and make  Meaningful reports by using the BI tools like Tableau,PowerBI and QlikView
         through which the Users analyse their data.
                      I have Started my Journey with small startup company named OTSI and worked with tech Giants like Deloitte,
          TCS and TechMahindra.I worked in projects Related to the Telecomm Industry,HR Data,GE(General Electrics),Banking 
          project like CITI Bank and created Reports which are used by the clients on Day to Day bases for data Analysis 
          and Critical Problem Solving which Provide Solutions by giving meaningful Insights about the data.
           </p>

           <h2>Skills</h2>
        <p>
         As a BI Developer I am good with BI tools Like Tableau,PowerBI,Qlikview 
         For the Data Skills Data Analytics,Data validation
         Softskills like communication skills 
           </p>

           </div>
      </div>
    </div>
  );
}
export default About;
