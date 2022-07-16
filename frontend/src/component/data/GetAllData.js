import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import "./alldata.css";
import { useSelector, useDispatch } from "react-redux";
import { AllData, deleteData, singleData} from "../../actions/dataAction";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const GetAllData = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const alldata = useSelector((state) => state.alldata.data);
  const deleteDataHandler = (id) => {
    dispatch(deleteData(id));
    window.location.reload(false);
    alert.success("Delete Successfully");
  };
  const takeData=(id)=>{
    dispatch(singleData(id));
  }
  const rows = [];
  alldata &&
    alldata.forEach((item, index) => {
      rows.push({
        name: item.name,
        id: item._id,
        phone_no: item.phone_no,
        email: item.email,
        degree: item.degree
      });
    });
  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 200,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "phone_no",
      headerName: "Phone No.",
      type: "string",
      minWidth: 180,
      flex: 0.3,
    },

    {
      field: "email",
      headerName: "Email",
      type: "string",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "degree",
      headerName: "Degree",
      type: "string",
      minWidth: 230,
      flex: 0.5,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Update",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/update/${params.getValue(params.id, "id")}` } onClick={() => takeData(params.id)}>
            <ModeEditIcon />
          </Link>
          </Fragment>
        );
      },
    },
    {
      field: "action",
      flex: 0.3,
      headerName: "Delete",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button variant="text" onClick={() => deleteDataHandler(params.getValue(params.id, "id"))}><DeleteIcon /></Button>
          </Fragment>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(AllData());
  }, [dispatch]);

  return (
    <div className="myDataPage" style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        className="myDataTable"
        autoHeight
      />
    </div>
  );
};

export default GetAllData;