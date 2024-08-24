const RestrauntCard = (props) => {
  console.log("props is .......", props); //here in props we are only passing resData neeche se

  const { resData } = props;
  //props se resData destructure kiya, yaani pure props object mein se resData ka content hi uthaya

  // console.log("ResData ...........", resData);

  const { name, costForTwo, avgRating, sla } = resData?.info; //optional chaining used here
  //here we are destructuring name, costForTwo, avgRating, sla ===> from resData.info

  // console.log("name ...........", name);

  // const { name, costForTwo, avgRating, sla, cloudinaryImageId } =
  //   props?.resData?.info;
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

export default RestrauntCard;
