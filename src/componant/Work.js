import React from "react"
import Workcard from "./Workcard"
import Workdata from "./Workdata"

const Work = () => {
    return (
      <div className="work-container">
        <h2 className="project-heading"> PROJECTS </h2>
        <div className="project-container ">
         {Workdata.map((val,ind) =>{
         return (
            <Workcard  
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                sourcecode={val.Sourcecode}
            />
         )
         })}
      </div>
      </div>
    )
  }
  
  export default Work