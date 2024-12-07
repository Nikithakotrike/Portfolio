import "./Skills.css";
import tableau from "/src/images/tableau.png";
import powerbi from "/src/images/powerbi.png";
import mysql from "/src/images/mysql.png";
import excel from "/src/images/excel.png";
import DataAnalysis from "/src/images/Data Analysis.png";

function Skills() {
  return (
    <ul className="skillsbody">
      <li>
        <img className="tab" src={tableau}></img>
        <div id="Name">Tableau</div>
      </li>
      <li>
        <img className="pow" src={powerbi}></img>
        <div id="Name">PowerBI</div>
      </li>
      <li>
        <img className="sql" src={mysql}></img>
        <div id="Name">MY SQL</div>
      </li>
      <li>
        <img className="exc" src={excel}></img>
        <div id="Name">EXCEL</div>
      </li>
      <li>
        <img className="dat" src={DataAnalysis}></img>
        <div id="Name">DATA ANALYTICS</div>
      </li>
    </ul>
  );
}

export default Skills;
