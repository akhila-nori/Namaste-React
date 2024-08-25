import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [listOfRestr, setListofRestr] = useState(restauntList);
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
