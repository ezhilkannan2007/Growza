import hero from './assets/hero.png'
function GrowzaHero(){
  return(
    <>
    <div className="container-fluid p-0 justify-content-start">
      <div className="row px-3 bg-light">
        <div className="col-12 col-md-6 bg-light p-3 text-start" >
          <button className="btn btn-sm text-dark rounded-pill mb-3 fw-bold">Learn . Build . Grow</button>
          <h2 className="text-dark text-nowrap"><b>Grow Your Skills with</b></h2>
          <h1 className="text text-nowrap"><b>Growza.</b></h1>
          <h6 className="text-dark">Explore high-quality courses,learn from industry experts and level up your career.</h6>
          <h6 className="py-1"><i className="text-primary bi bi-check"></i>Expert Instructors<i className="text-primary bi bi-check"></i>Flexible Learning<i className="text-primary bi bi-check"></i>Certificates</h6>
        </div>
        <div className="col-12 col-md-6  text-center">
          <img 
            src={hero}
            alt="Growza Skills" 
            className="img-fluid rounded my-3" 
          />
        </div>
      </div>
    </div>

      <div>
        <div className="container my-4">
        
          <div className="row">
        
            <div className="col-6">
              <h3 className="text-start fw-bold">Popular Courses</h3>
              <h6 className="text-start">Most enrolled and highly rated courses </h6>
              <br></br>
            </div>
            <div className="col-6 text-end">
              <br></br>
                <a href="" className="text text-end">View All courses<i className="bi bi-arrow-right-short"></i></a>
            </div>
        
          </div>
         </div>     
      </div>
    </>
  );
}
export default GrowzaHero;