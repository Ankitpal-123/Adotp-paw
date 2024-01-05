import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" d-flex flex-column flex-md-row justify-content-around align-items-center p-4 bg-light">
        <div className="text-center">
          © {new Date().getFullYear()} Copyright:
          <a className="text-reset fw-bold ms-2">Adopt-A-Paws</a>
        </div>
        <div className="d-flex flex-column flex-md-row gap-3">
          <Link to="/" className="text-decoration-none text-black">
            Home
          </Link>
          <Link to="/history" className="text-decoration-none text-black">
            History
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
