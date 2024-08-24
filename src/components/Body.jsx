import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
const BodyComponent = () => {
    //normal javascript variable and not state variable 
  let listofrest = [
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
            listofrest = listofrest.filter((res1) => res1.info.avgRating > 4);
            console.log("list of rest", listofrest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-conatiner">
        {/* <RestrauntCard resData={restauntList[0]} />
        <RestrauntCard resData={restauntList[1]} />
        <RestrauntCard resData={restauntList[2]} /> */}
        {listofrest.map((res1) => (
          <RestrauntCard key={res1.info.id} resData={res1} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
