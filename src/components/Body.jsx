import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  //normal javascript variable and not state variable

  const [listOfRestr, setListofRestr] = useState(restauntList);

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
            setListofRestr(filteredListOfData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-conatiner">
        {/* <RestrauntCard resData={restauntList[0]} />
        <RestrauntCard resData={restauntList[1]} />
        <RestrauntCard resData={restauntList[2]} /> */}
        {restauntList.map((res1) => (
          <RestrauntCard key={res1.info.id} resData={res1} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
