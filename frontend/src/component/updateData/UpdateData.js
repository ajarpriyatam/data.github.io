import React, { useState, useEffect, Fragment } from "react";
import "../savdata/savedata.css";
import { useDispatch, useSelector } from "react-redux";
import {updateData } from "../../actions/dataAction";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const Data = useSelector((state) => state.getData.Data);
  console.log(Data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [degree, setDegree] = useState("");
  const updateSubmit = (e) => {
    e.preventDefault();
    const myForm = {
      "name": name,
      "phone_no": phone_no,
      "degree": degree,
      "id": Data._id
    };
    dispatch(updateData(myForm));
    alert.success("Data Updated Successfully..");
    navigate("/data");
  };
  useEffect(()=>{
    if(Data) {
      setName(Data.name);
      setEmail(Data.email);
      setPhone_no(Data.phone_no);
      setDegree(Data.degree);
    }
  },[Data]);
  return (
    <Fragment>
      <div className="popup">
        <div className="popup-content">
          <h2>Update Data</h2>
          <form className="signUpForm" encType="multipart/form-data" onSubmit={updateSubmit}>
            <div className="signUpName">
              <input type="text" placeholder="name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="signUpPhone">
              <input type="text" placeholder="Phone no." required name="phone_no" value={phone_no} onChange={(e) => setPhone_no(e.target.value)} />
            </div>
            <div className="signUpEmail">
              <input type="email" placeholder="Email" required name="email" value={email} readOnly />
            </div>
            <div className="signUpPassword">
              <input type="text" placeholder="Degree" required name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
            </div>
            <input type="submit" value="UPDATE" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateData;