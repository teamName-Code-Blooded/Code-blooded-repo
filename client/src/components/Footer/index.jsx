import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





function FooterMain() {

return(
<div className="container">
<footer
  className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
>
  <p className="col-md-4 mb-0 text-body-secondary">
    &copy; 2024 CodeBlooded Inc.
  </p>

  <a
    href="/"
    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
  >
    <svg className="bi me-2" width="40" height="32">
      <use xlink:href="#bootstrap" />
    </svg>
  </a>

  <ul className="nav col-md-4 justify-content-end">
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">
        <img src="../../../public/images/instagram.svg" alt="instagram" /></a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">
        <img src="../../../public/images/twitter.svg" alt="Twitter" />
      </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-body-secondary">
        <img src="../../../public/images/github.svg" alt="Github" />
      </a>
    </li>
  </ul>
</footer>
</div>);
}

export default FooterMain;