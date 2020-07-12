import React, { useContext, useEffect } from "react";
import FarmerContext from "../context/farmer/farmerContext";

const Profile = (props) => {
  const farmerContext = useContext(FarmerContext);
  const { farmer, getFarmer, baseImageUrl, getFarmers, farmers } = farmerContext;

  useEffect(() => {
    if (farmers.length < 1) {
      getFarmers();
    }
    getFarmer(props.match.params.id);
    console.log(props.match.params.id);
  }, []);
  console.log(farmer);

  return (
    <div>
      <div className="profile-body">
        <div className="single-profile-picture">
          <img className="image profile-image" src={`${baseImageUrl}${farmer.passport_photo}`} alt="" />
        </div>
        <div className="profile-details">
          <h4>{`${farmer.first_name} ${farmer.middle_name} ${farmer.surname}`}</h4>
          <h5>RIFAN/2019D/EK/36</h5>
          <p>08123444803</p>
        </div>
        <div className="profile-table">
          <div className="table-1">
            <div className="item-row">
              <p>DOB:</p>
            </div>
            <div className="item-row">
              <p>Gender:</p>
            </div>
            <div className="item-row">
              <p>Occupation:</p>
            </div>
            <div className="item-row">
              <p>Email:</p>
            </div>
            <div className="item-row">
              <p>Marital Status:</p>
            </div>
            {/* <p>DOB:</p>
            <hr />
            <p>Gender:</p>
            <hr />
            <p>Occupation:</p>
            <hr />
            <p> Email:</p>
            <hr /> */}
            {/* <p>Marital Status:</p> */}
          </div>
          <div className="table-2">
            <div className="item-row">
              <p>Address:</p>
            </div>
            <div className="item-row">
              <p>City:</p>
            </div>
            <div className="item-row">
              <p>State:</p>
            </div>
            <div className="item-row">
              <p>ID No.:</p>
            </div>
            <div className="item-row">
              {" "}
              <button className="view-btn">View ID</button> <button className="view-btn">View Fingerprint</button>{" "}
            </div>
            {/* <p>Address:</p>
            <hr />
            <p>City:</p>
            <hr />
            <p>State:</p>
            <hr />
            <p>Id No.:</p>
            <hr />
            <button>View ID</button> <button>View Fingerprint</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
