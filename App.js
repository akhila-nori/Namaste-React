import React from "react";
import ReactDOM from "react-dom";

const HeaderComponent = () => {
  return (
    <div className="headerCSS">
      <div className="logo-conatiner">
        <img
          className="logo324grht"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"
        />
      </div>

      <div className="nav-items1">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  console.log("props is ...........", props);
  const { resData } = props;
  console.log("ResData ...........", resData);

  const { name, costForTwo, avgRating, sla } = resData?.info; //optional chaining used here
  //here we are destructuring name, costForTwo, avgRating, sla ===> from resData.info

  console.log("name ...........", name);

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        style={{
          width: "200px",
          height: "100px",
        }}
      />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const restauntObject = {
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
    parentId: "1040",
    avgRatingString: "4.5",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-08-21 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Desserts.png",
          description: "Delivery!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Desserts.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/theobroma-near-hp-pump-wakad-road-pune-732719",
    type: "WEBLINK",
  },
};

const BodyComponent = () => {
  return (
    <div className="bodyCss">
      <div className="searchCss">Search</div>
      <div className="res-conatiner">
        <RestrauntCard resData={restauntObject} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
