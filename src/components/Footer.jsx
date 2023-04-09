function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">
            <a href="https://github.com/manojsai1"><i className="fa-brands fa-github"></i></a>
            <a href="https://linkedin.com/in/manojsai1"><i className="fa-brands fa-linkedin"></i></a>
            {/* <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a> */}
            {/* <a href="https://youtube.com"><i className="fa-brands fa-youtube"></i></a> */}
          </div>
          <div className="footer-content__text">
             <a href="privacy">
            <p>Privacy</p></a> 
            <a href="terms"><p>Terms of Use</p></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
