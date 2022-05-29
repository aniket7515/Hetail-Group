import React from "react";
import './styles.css'
import hetalifoot from './Images/hetalifootlogo.png'
import hetail from './Images/path.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="l-footer">
          <h1>
            <img src={hetalifoot} alt="" />
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p> */}
        </div>
        <ul className="r-footer">
          <li>
            <h2>Quick Links</h2>
            <ul className="box">
              <li>
                <a href="#">Contact US</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">Testimonal</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>Flats in Mumbai</h2>
            <ul className="box ">
              <li>
                <a href="#">1 BHK Andheri West</a>
              </li>
              <li>
                <a href="#">2 BHK Andheri West</a>
              </li>
              <li>
                <a href="#">3 BHK Andheri West</a>
              </li>
              <li>
                <a href="#">1 BHK Goregaon East</a>
              </li>
              <li>
                <a href="#">2BHK Goregaon East</a>
              </li>
              {/* <li>
                <a href="#">Customer Service</a>
              </li> */}
            </ul>
          </li>
          <li>
            <h2>Projects in Mumbai</h2>
            <ul className="box">
              <li>
                <a href="#">Ongoing</a>
              </li>
              <li>
                <a href="#">Upcoming</a>
              </li>
              <li>
                <a href="#">Completed</a>
              </li>
              <li>
                <a href="#">Hetail Blessing</a>
              </li>
              <li>
                <a href="#">Hetail Annuchhaya</a>
              </li>
            </ul>
          </li>
        </ul>


           
      <div
        className="flex m-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin:"auto"
        }}
      >
        <div
          style={{
            width: "500px",
            height: "5px",
            background:
              " radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        ></div>
        <div>
          {" "}
          <img src={hetail} alt="" />
        </div>
        <div
          style={{
            width: "500px",
            height: "5px",
            background:
              " radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        ></div>
      </div>



        <div className="b-footer" style={{color:"#fff"}}>
          <p>Copyright ©2022 Hetail Enterprises -All rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
