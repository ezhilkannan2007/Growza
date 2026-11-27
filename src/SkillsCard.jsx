import { useState } from "react";

function SkillsCard(props){

  const styles = {
    height : "150px",
    width : "100%",
  }
  const line = {
    textDecoration : "none",
  }
  const button = {
    color:"white",
    backgroundColor : "#6f2dbd"
  }

  const [remaining , setRemaining] = useState(5);
  function reduceRemain(title){
    if (remaining>0){
      alert(`Course : ${title} , Registered Successfully!`)
      let newremaining = remaining-1;
      setRemaining(newremaining);
    }
    else{
      alert(`Sorry Course ${title} full,Try other courses`)
    }
  }

  return(
    
      <div className=" col-6 col-md-3 flex-shrink-0">
            <div className="card p-1">
              <img src={props.image} style={styles} alt="react course" className="card-img-top rounded"/>
              <div className="card-body">
                <h6 className="card-title text-start">{props.title}</h6>
                <p className="card-text text-start text-danger pb-1"><i className="bi bi-clock-history"></i> only {remaining} left</p>
                <div className="d-flex justify-content-between overflow-x-auto">
                  <h6 className="fw-bold text-start pt-2">{props.price}</h6>
                  <a href="#" style={button} onClick={()=>reduceRemain(props.title)} className="btn btn-sm mx-1"><i className="bi bi-cart3"></i> Register</a>
                  <button className="btn btn-sm btn-danger rounded m-1" onClick = {()=>props.deleteCard(props.id)}><i className="bi bi-x"></i></button>
                </div>
              </div>
            </div>
          </div>


    
  );
}
SkillsCard.defaultProps = {
  title :"loading",
  desc : "Content loading",
  price :"..."
}

export default SkillsCard;