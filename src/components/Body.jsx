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
    ); //fetch is an inbuilt fucntion that is given to us by browsers, JS engine ==> pure javascript
    // fetch() will fetch data from the API
    //fetch() ==> asynchronous fucntion (means this is a blocking operation, so it will be executed later) ==> fetch will return a promise
    //How do we resolve a proisme ? ==> using async await
    //I will async the fucntion and I will await for the data to come

    //once we have data then we will convert the data to readable string i.e, json
    const json = await data1.json();
    //I am doing an await for the promsie to get resolved once the promise is resolved then I'll covernt the returned data into json

    console.log("json....", json);
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
