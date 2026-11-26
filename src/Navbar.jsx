function Navbar() {
  const styles = {
    color : "#6f2dbd"
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light rounded shadow m-1 mt-2">
      <div className="container-xl">
        <a href="#" className="text-dark navbar-brand"><b><i style={styles} className="bi bi-mortarboard-fill"></i> Grow<span style={styles}>za</span></b></a>

        <button className="navbar-toggler " data-bs-target=".links" data-bs-toggle="collapse"><span className="navbar-toggler-icon"></span></button>
        
        <div id="links" className="text links collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="text nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="text nav-link" href="#">Explore</a>
            </li>
            <li className="nav-item">
              <a className="text nav-link" href="#">My Learning</a>
            </li>
          </ul>
        </div>
        <div className="links collapse navbar-collapse justify-content-end">
          <button className="btn btn-outline-success">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
