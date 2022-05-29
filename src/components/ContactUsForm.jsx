import React from "react";
import hetail from "./Images/path834.png";
import user  from './Images/user.png'
import phone from './Images/phone.png'
import comment from './Images/comment.png'
import envelope from './Images/envelope.png'
import './styles.css'

const ContactUsForm = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "#F5F5F5" }}>
      <h2
        style={{
          fontSize: "32px",
          fontFamily: "Cinzel",
          fontWeight: "400",
          textAlign: "center",
          color: " #474747",
        }}
      >
        CONTACT US
      </h2>

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

      <div className="form">
        <div>
          {/* <div style={{display: 'flex', flexDirection: 'row',textAlign: 'center'}}>
            <p>I am a</p>
          </div>
          <div>
            <button>Vendor</button>
            <button>Agent</button>
            <button>Consumer</button>
          </div> */}

        </div>
        <form action="" className="text-center" style={{textAlign: 'center'}}>
            <div className="my-3"   style={{display: 'flex',textAlign: 'center',margin:"auto",justifyContent: 'center'}}>
                <p className="px-5 ">I am a</p>
                <button className="btn" style={{marginLeft:"70px"}}>Vendor</button>
                <button className="btn ">Agent</button>
                <button className="btn" style={{backgroundColor:"#004A74",color:"white"}}>Consumer</button>
            </div>
            <div className="p-3 ">
                <label className="px-5"> <img src={user}/>Name*</label>
                <input className="mx-5" type="text" style={{width: "300px"}}  />
            </div>
            <div className="p-3">
                <label className="px-5"> <img src={envelope}/>Email*</label>
                <input className="mx-5" type="text" style={{width: "300px"}}  />
            </div>
            <div className="p-3">
                <label className="px-5"> <img src={phone}/>Phone*</label>
                <input className="mx-5" type="text" style={{width: "300px"}}  />
            </div>
            <div className="p-3">
                <label className="px-5"> <img src={comment}/>Message</label>
                <input  className="mx-5"type="text" style={{width: "300px",height:"70px"}} />
            </div>

            <div className="m-5">
                <button style={{padding: "10px 22px 8px",gap: "2px",backgroundColor:"#2596C7",width:"350px",border:"none",color:"white",boxShadow: "0px 4px rgba(0,0,0,0.2)"}}>Contact Us</button>
            </div>
        </form>
      </div>

     
    </div>
  );
};

export default ContactUsForm;
