const Data = require("../models/DataModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.newData = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    phone_no,
    email,
    degree
  } = req.body;
  const data = await Data.create({
    name:name,
    phone_no:phone_no,
    email:email,
    degree:degree,
  });

  res.status(201).json({
    success: true,
    data
  });
});

exports.deletedata = catchAsyncErrors(async (req, res, next) => {
  const data = await Data.findById(req.params.id);

  if (!data) {
    return next(new ErrorHander("Data not found with this Id", 404));
  }
  await data.remove();
  res.status(200).json({
    success: true,
    message:"Data Deleted",
  });
});

exports.getSingledata = catchAsyncErrors(async (req, res, next) => {
  const data = await Data.findById(req.params.id);

  if (!data) {
    return next(new ErrorHander("Data not found with this Id", 404));
  }
  res.status(200).json({
    success: true,
    data
  });
});

exports.AllData = catchAsyncErrors(async (req, res, next) => {
  const data = await Data.find();
  res.status(200).json({
    success: true,
    data,
  });
});

exports.updateData = catchAsyncErrors(async (req, res, next) => {
  const newData ={
    name: req.body.name,
    phone_no:req.body.phone_no,
    degree:req.body.degree
  };
  if (req.body.email) {
    return next(new ErrorHander("Email does not Change", 400));
  }
  const data = await Data.findByIdAndUpdate(req.body.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
   res.status(200).json({
   success: true,
   data
  });
});


