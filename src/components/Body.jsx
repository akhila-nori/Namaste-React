import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [listOfRestr, setListofRestr] = useState(restauntList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data1.json();
    console.log("json....", json);
    // const extractedData = json?.data?.cards.map((card) => card.card.info);
    // setListofRestr(json.data.cards.card.card);
    // const ress = json.data.cards
    //   .filter(
    //     (card) =>
    //       card.card["@type"] ===
    //       "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    //   )
    //   .map((card) => card.card)
    //   .slice(4);
    // console.log("ressssss..............", ress);
   
    setListofRestr(
      json.data.cards
        .filter(
          (card) =>
            card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((card) => card.card)
        .slice(4)
    );
  };

  console.log("dfojgtrjblgrmn", listOfRestr);
  console.log("Body component is .....", <BodyComponent />);
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
          <RestrauntCard key={res1.info.id} resData={res1} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
