import React, { useContext, useEffect } from "react";
import FarmerContext from "../context/farmer/farmerContext";
import User from "./User";

const Home = () => {
  // const [farmers, setFarmers] = useState([]);
  // const [baseImage, setBaseImage] = useState("");

  // const getFarmer = (id) => {
  //   return farmers.find((farmer) => farmer.farmer_id === id);
  // };
  const farmerContext = useContext(FarmerContext);
  const { farmers, getFarmers, baseImageUrl } = farmerContext;

  useEffect(() => {
    getFarmers();
    // eslint-disable-next-line
  }, []);

  console.log(farmers.farmers);
  return (
    <div>
      <h1 className="home-heading">Our Farmers</h1>
      <div className="users-page">
        {farmers.map((farmer) => (
          <User farm={farmer} baseImage={baseImageUrl} key={farmer.farmer_id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
