function Footer() {
  return (
    <>
      <div id="footer-container">
        <div className="footer-contact text-center">
          <p>&copy; 2024 Imran Ansari</p>
        </div>

        <div className="footer-link-tag text-center">
          <span className="contact-span">Contact: </span>
          <span className="email-span">
            <a className="link-tag" href="mailto:imransxcr53@gmail.com">
              imransxcr53@gmail.com
            </a>
          </span>
          <span className="link-container">
            <a
              className="link-tag"
              href="https://linkedin.com/in/imran693"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i id="icons" className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="link-tag"
              href="https://github.com/imran6932"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i id="icons" className="fa-brands fa-square-github"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
