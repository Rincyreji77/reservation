const db = require("../models");
const Passenger = db.passenger;

exports.createRecord = (req, res) => {
  if (!req.body.passenger_name || !req.body.passenger_age) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Passenger.create({
      passenger_id: req.body.passenger_id,
      passenger_name: req.body.passenger_name,
      passenger_age: req.body.passenger_age,
      passenger_address: req.body.passenger_address,

    })
      .then((passenger_record) => {
        res.send({
          message: "Record created successfully",
          id: passenger_record.id,
        });
      })
      .catch((error) => {
        res.send({
          message: "Some error occured",
          error_details: error.message,
        });
      });
  }
};