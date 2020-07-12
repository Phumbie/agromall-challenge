import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  // console.log(props);
  const { baseImage, farm } = props;
  console.log(baseImage, farm);
  // <div className="users-page">
  return (
    <div className="user-card">
      <div className="user-picture">
        <img className="image" src={`${baseImage}${farm.passport_photo}`} alt="" />
      </div>
      <h4>{`${farm.first_name} ${farm.middle_name} ${farm.surname}`} </h4>
      <h5>{farm.reg_no} </h5>
      <p>{farm.mobile_no} </p>
      <Link to={`/user/${farm.farmer_id}`}>
        <button className="view-user">View</button>
      </Link>
    </div>
  );
};

export default User;
