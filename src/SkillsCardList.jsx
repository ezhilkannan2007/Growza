import { useEffect, useState } from 'react'
import SkillsCard from './SkillsCard'

function SkillsCardList(){
  const [skills,setSkills] = useState(null);

  useEffect(()=>{
   fetch("http://localhost:3000/skills")
   .then((response)=>{return response.json()}).then((data)=>setSkills(data));
  },[])

  function deleteCard(id){
    const newskillsList = skills.filter((skill)=>skill.id!=id);
    setSkills(newskillsList);
  }
  if(!skills){
    return <></>
  }
  const skillsList = skills.map((skill)=>(<SkillsCard key= {skill.id} id= {skill.id} image={skill.image} title={skill.title} desc={skill.desc} price={skill.price} deleteCard={deleteCard}></SkillsCard>))
  
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
