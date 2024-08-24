import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  //normal javascript variable and not state variable

  const [listOfRestr, setListofRestr] = useState([
    {
      info: {
        id: "732719",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/a911dce0-6a63-49b1-9b6e-091d02f5ccbe_732719.jpg",
        locality: "Near HP Pump",
        areaName: "Wakad Road",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 4.5,
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 24,
        },
      },
    },
    {
      info: {
        id: "765152",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/95189a93-5dc8-49ea-9a4b-986687ddc7a8_765152.jpg",
        locality: "Pimpri chinchwad",
        areaName: "Punawale",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4,

        avgRatingString: "4.0",

        sla: {
          deliveryTime: 26,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "36014",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/4fe8d129-44fd-469e-9eda-a1416a6dffcd_36014.JPG",
        locality: "KAILASH HOTEL",
        areaName: "Tathawade",
        costForTwo: "₹350 for two",
        cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 3.8,
        avgRatingString: "3.8",
        sla: {
          deliveryTime: 33,
        },
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-kailash-hotel-tathawade-pune-36014",
        type: "WEBLINK",
      },
    },
  ]);

  //not required now
  let listofrestJS = [
    {
      info: {
        id: "732719",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/a911dce0-6a63-49b1-9b6e-091d02f5ccbe_732719.jpg",
        locality: "Near HP Pump",
        areaName: "Wakad Road",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 4.5,
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 24,
        },
      },
    },
    {
      info: {
        id: "732718",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/a911dce0-6a63-49b1-9b6e-091d02f5ccbe_732719.jpg",
        locality: "Near HP Pump",
        areaName: "Wakad Road",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 3.9,
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 50,
        },
      },
    },
    {
      info: {
        id: "732718",
        name: "MacD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/a911dce0-6a63-49b1-9b6e-091d02f5ccbe_732719.jpg",
        locality: "Near HP Pump",
        areaName: "Wakad Road",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 4.1,
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 50,
        },
      },
    },
  ];
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
        {listOfRestr.map((res1) => (
          <RestrauntCard key={res1.info.id} resData={res1} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
