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
  return(
    
      <div className=" col-6 col-md-3 flex-shrink-0">
            <div className="card p-1">
              <img src={props.image} style={styles} alt="react course" className="card-img-top rounded"/>
              <div className="card-body">
                <h6 className="card-title text-start">{props.title}</h6>
                <p className="card-text text-start"><i className="bi bi-award"></i>{props.desc}</p>
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold text-start pt-2">{props.price}</h6>
                  <a href="#" style={button}className="btn btn-sm"><i className="bi bi-cart3"></i> Register</a>
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