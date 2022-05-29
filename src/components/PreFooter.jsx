import React from 'react'
import hetail from "./Images/path834.png";
import './styles.css'
import phone from "./Images/phone.png"
import mail from './Images/envelope.png'
import mapmarker from './Images/map-marker-alt.png'
import map from './Images/image 10.png'
import addbook from './Images/address-book.png'

const PreFooter = () => {
  return (
    <div>
         
      <div
        className="flex m-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "5px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(83, 202, 245, 0.8) 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        ></div>
        <div>
          {" "}
          <img src={hetail} alt="" />
        </div>
        <div
          style={{
            width: "100px",
            height: "5px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(83, 202, 245, 0.8) 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        ></div>
      </div>


    {/* footer    */}
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <p><img src={phone} alt="" /> 09594555544</p>
                       
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <p><img src={mail} alt="" /> sales@hetailgroup.com</p>
                        
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3><img src={mapmarker} alt="" />
                        <img src={map} alt="" /></h3>
                        
                    </div>
                    <div class="col-lg-3 item social">
                        <p class="copyright"> <img src={addbook} alt="" /> Vithal Nagar Society <br /> 10th road ,juhu Scheme ,<br/> Vile parle(W),<br/>Mumbai Maharashtra <br/>400056</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    </div>
  )
}

export default PreFooter