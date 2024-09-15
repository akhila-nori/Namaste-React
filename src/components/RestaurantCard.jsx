import { CDN_URL } from "../../utils/constants";

const RestrauntCard = (props) => {
  console.log("props from resCard is .......", props); 

  const { resData } = props;

  console.log('final resData in resCard is ....',resData)

  // console.log("inside 2", resData.info.name);

 
  const { name, costForTwo, avgRating, sla } = resData.info;



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
          CDN_URL +
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
