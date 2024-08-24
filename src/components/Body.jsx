import RestrauntCard from "./RestaurantCard";
import restauntList from "../../utils/mockData";
const BodyComponent = () => {
  return (
    <div className="bodyCss">
      <div className="searchCss">Search</div>
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
