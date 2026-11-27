import { useEffect, useState } from 'react'
import SkillsCard from './SkillsCard'

function SkillsCardList(){
  const [skills,setSkills] = useState(null);
  const [error,setError] = useState(null);

  useEffect(()=>{
   fetch("http://localhost:3000/skills")
   .then((response)=>{return response.json()})
   .then((data)=>setSkills(data))
   .catch(err=>{setError(err.message)});
  },[])

  function deleteCard(id){
    const newskillsList = skills.filter((skill)=>skill.id!=id);
    setSkills(newskillsList);
  }
  if(!skills){
    return (
    <>
    <div className="d-flex justify-content-center">
      <div className="d-flex spinner-border text-dark text-center justify-content-center" role="status">
        <span className="visually-hidden text-center">Loading...</span>
      </div>
    </div>
    </>
    );
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
