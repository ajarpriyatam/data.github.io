import React, { useState } from "react";
import "./savedata.css";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { createData } from "../../actions/dataAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Savedata = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    degree: "",
    phone_no: ""
  });
  
  const { name, email, degree, phone_no } = user;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = {
      "name": name,
      "email": email,
      "degree": degree,
      "phone_no": phone_no,
    }
    dispatch(createData(myForm));
    alert.success("New Data Added Successfully..");
    navigate("/data");
  };
  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Data</h2>
            <form className="signUpForm" encType="multipart/form-data" onSubmit={registerSubmit}>
              <div className="signUpName">
                <input type="text" placeholder="Name" required name="name" value={name} onChange={registerDataChange} />
              </div>
              <div className="signUpPhone">
                <input type="text" placeholder="Phone no." required name="phone_no" value={phone_no} onChange={registerDataChange} />
              </div>
              <div className="signUpEmail">
                <input type="email" placeholder="Email" required name="email" value={email} onChange={registerDataChange} />
              </div>
              <div className="signUpPassword">
                <input type="text" placeholder="Degree" required name="degree" value={degree} onChange={registerDataChange} />
              </div>
              <input type="submit" value="SAVE" className="signUpBtn" />
            </form>
          </div>
        </div>
  );
};

export default Savedata;