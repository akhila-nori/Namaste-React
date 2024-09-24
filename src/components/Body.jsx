import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState, useEffect } from "react";
// import SpinnerButton from "./Loader";
import ShimmerUI from "./Shimmer";
import SpinnerButton from "./Loader";

const BodyComponent = () => {
  const [listOfRestr, setListofRestr] = useState(restauntList);
  const [searchText, setSearchText] = useState("");
  const [listOfFilteredRest, setListOfFilteredRest] = useState(restauntList)
 

  return listOfRestr.length === 0 ? (
    <>
      {console.log("listOfRestr.length....", listOfRestr.length)}
      <SpinnerButton />
    </>
  ) : (
    <div className="bodyCss">
      <div className="filterCss" style={{ display: "flex" }}>
        <div className="search">
          <input
            type="text"
            className="search-box"
            style={{ marginTop: "10px", marginLeft: "10px" }}
            value={searchText} //binding input text box value entered here to state variable
            onChange={(e) => {
              console.log("Inside input text");
              setSearchText(e.target.value); 
            }}
          />

          <button
            onClick={() => {
              console.log("Inside input text");
              console.log("searchText is ...............", searchText);

              //filter takes in a callback fucntion
              const filteredRest = searchText === "" ? listOfRestr : listOfRestr.filter((res) => {
                console.log('Search Text',searchText)
                return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()); //ensure the callback return s a value
              });
              setListOfFilteredRest(filteredRest); //update the UI with filetered rest
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          style={{ margin: "10px", cursor: "pointer" }}
          onClick={() => {
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
        {listOfFilteredRest.map((res1) => (
          <RestrauntCard key={res1.info.id} resData={res1} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
