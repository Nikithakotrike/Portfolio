import "./Skills.css";
import tableau from '/src/images/tableau.png';
import powerbi from '/src/images/powerbi.png';
import mysql from '/src/images/mysql.png';
import excel from '/src/images/excel.png';
import DataAnalysis from '/src/images/Data Analysis.png';


function Skills() {
  return (
    <section id="Skills" className="skillsbody">
    <div className="skilpic">
       <img className="tab" src = {tableau}></img>
      

       <div className="skilpic">
<img className="pow" src = {powerbi}></img>


<div className="skilpic">
<img className="sql" src = {mysql}></img>


<div className="skilpic">
<img className="exc" src = {excel}></img>



<div className="skilpic">
<img className="dat" src = {DataAnalysis}></img>
</div>
</div>
</div>
</div>
</div>
</section>

  );
}

export default Skills;
