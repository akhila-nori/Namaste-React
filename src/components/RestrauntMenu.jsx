import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
const RestarauntMenu = () => {
  const [restInfo, setResInfo] = useState(null);

  const p = useParams();
  console.log('params ....',p)

  //destructuring on the fly resId
 //   const {resId} = useParams();


  //when this page loads make an API call
  useEffect(() => {
    fetchMenu();
  }, []); //useEffect has empty dependecy array, hence it will called once on inital render

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=25396&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );
    if (!data.ok) {
      const text = await response.text();
      console.log("HTTP error: ${data.status}");
      console.error(`HTTP error! status: ${data.status}, Response: ${text}`);
    }
    const json = await data.json();
    console.log("json data is ......", json);
    setResInfo(json.data);
  };
  return restInfo === null ? (
    <ShimmerUI />
  ) : (
    <div className="menu">
      <h1>MENU</h1>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestarauntMenu;
