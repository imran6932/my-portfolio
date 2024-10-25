function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid" id="nav-container">
          {/* <a className="navbar-brand" href="#" id="logo-link"> */}

          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home-content">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience-content">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills-container">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project-content">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
