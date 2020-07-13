import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const { baseImage, farm } = props;

  return (
    <div className="user-card">
      <div className="user-picture">
        <img className="image" src={`${baseImage}${farm.passport_photo}`} alt="" />
      </div>
      <h4 className="name">{`${farm.first_name} ${farm.middle_name} ${farm.surname}`} </h4>
      <h5 className="reg">{farm.reg_no} </h5>
      <small className="mobile">{farm.mobile_no} </small> <br />
      <Link to={`/user/${farm.farmer_id}`}>
        <button className="view-user">View</button>
      </Link>
    </div>
  );
};

export default User;
