import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="danger"
      color="light"
      className="text-center text-lg-start text-white bg-info"
    >
      <section className="d-flex justify-content-center p-3 border-bottom">
        <div className="me-2 d-none d-lg-block">
          <span>Get connected on social networks:</span>
        </div>

        <div className="">
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>About Emandu
              </h6>
              <p>
                Emandu is a group of shop for products which brings into market for affodability and
                sustainability.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Mobiles
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Televisions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laptop
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessories
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Pepsikola, Kathmandu, Nepal
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                emandu@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +977 9809115865
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +977 9809115865
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset p-1 fw-bold" href="https://www.cashify.in/">
          emandu.com.np
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;

