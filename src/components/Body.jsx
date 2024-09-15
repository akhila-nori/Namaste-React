import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState, useEffect } from "react";
// import SpinnerButton from "./Loader";
import ShimmerUI from "./Shimmer";
import SpinnerButton from "./Loader";

const BodyComponent = () => {
  const [listOfRestr, setListofRestr] = useState(restauntList);
  // const [isDataLoading, setIsDataLoading] = useState(false);

  //swiggy API fetching 

  // useEffect(() => { 
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   setIsDataLoading(true);
  //   // const data1 = await fetch(
  //   //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   // );
  //   // const json = await data1.json();
  //   // console.log("json....", json);
  //   // setIsDataLoading(false);
  //   // const resto = json.data.cards
  //   //   .filter(
  //   //     (v) =>
  //   //       v.card.card["@type"] ===
  //   //       "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  //   //   )
  //   //   .map((card) => card.card);
  //   // console.log(" =>> filtered", resto);
  //   // console.log("*****************", resto[0].card.info.avgRating);
  //   // setListofRestr(resto);
  // };

  return (
    <div className="bodyCss">
      <div className="filterCss">
        <button
          className="filter-btn"
          style={{ margin: "10px", cursor: "pointer" }}
          onClick={() => {
            //write filter out logic on click of this button
            const filteredListOfData = listOfRestr.filter(
              (res1) => res1.info.avgRating > 4
            );
            {
              console.log("INSIDE JSX", filteredListOfData);
            }
            setListofRestr(filteredListOfData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-conatiner">
        {listOfRestr.map((res1) => (
          <RestrauntCard resData={res1} />
        ))}
      </div>
      {/* if (listOfRestr.length === 0) {<SpinnerButton />} */}
      {/* if (listOfRestr.length === 0){<ShimmerUI />} */}
    </div>
  );
};

export default BodyComponent;
