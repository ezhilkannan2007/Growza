import { useState } from 'react'
import cpp from './assets/cpp.png'
import java from './assets/java.jpeg'
import linkedin from './assets/linkedin.jpeg'
import node from './assets/node.jpeg'
import python from './assets/python.jpeg'
import ui from './assets/ui.jpeg'
import SkillsCard from './SkillsCard'

function SkillsCardList(){
  const [skills,setSkills] = useState([
    {id:1,
    image : linkedin,
    title : "LinkedIn",
    desc: "Know everything about LinkedIn",
    price:"$99.0",
    },
    {id:2,
    image : cpp,
    title : "cpp",
    desc: "Know everything about cpp",
    price:"$99.0",
    },
    {id:3,
    image : java,
    title : "java",
    desc: "Know everything about java",
    price:"$99.0",
    },
    {id:4,
    image : node,
    title : "node",
    desc: "Know everything about node",
    price:"$99.0",
    },
    {id : 5,
    image : python,
    title : "python",
    desc: "Know everything about python",
    price:"$99.0",
    },
    {id : 6,
    image : ui,
    title : "LinkedIn",
    desc: "Know everything about ui",
    price:"$99.0",
    }
  ]);

  function deleteCard(id){
    const newskillsList = skills.filter((skill)=>skill.id!=id);
    setSkills(newskillsList);
  }

  const skillsList = skills.map((skill)=>(<SkillsCard key= {skill.id} id= {skill.id} image={skill.image} title={skill.title} desc={skill.desc} price={skill.price} deleteCard={()=>deleteCard(skill.id)}></SkillsCard>))
  
  return (
    <>
    <div className="container">
      <div className="row flex-nowrap overflow-x-auto">
         {skillsList}
      </div>
    </div>
   
    </>
  );
}

export default SkillsCardList
