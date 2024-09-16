import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState, useEffect } from "react";
// import SpinnerButton from "./Loader";
import ShimmerUI from "./Shimmer";
import SpinnerButton from "./Loader";

const BodyComponent = () => {
  const [listOfRestr, setListofRestr] = useState(restauntList);
  const [searchText, setSearchText] = useState("");
  // const [isDataLoading, setIsDataLoading] = useState(false);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   setIsDataLoading(true);
  //   // const data1 = await fetch(
  //   //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   // );
  //   // const json = await data1.json(); //await for the promise to resolve
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

  //conditional rendering --> rendering on the basis of condition
  // if (listOfRestr.length === 0) {
  //   <SpinnerButton />;
  // }

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
              setSearchText(e.target.value); //whenever something changes in input text-box ==> onChange ==? when we type in searchBx ==> we update the state variable
              //we are changing the state variable here ==> React re-renders the component when state variable is changed
              //React re-renders the Body component ==> upon every letter being typed in input search-box
            }}
          />
          {/* on click of this button filter the restraunt cards and update the UI */}
          {/* search text */}
          <button
            onClick={() => {
              console.log("Inside input text");
              console.log("searchText is ...............", searchText);

              //filter takes in a callback fucntion
              const filteredRest = searchText === "" ? listOfRestr : listOfRestr.filter((res) => {
                console.log('Search Text',searchText)
                return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()); //ensure the callback return s a value
              });
              setListofRestr(filteredRest); //update the UI with filetered rest
            }}
          >
            Search
          </button>
        </div>

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
