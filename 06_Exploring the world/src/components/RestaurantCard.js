import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <div className="res-name">
        <h3>{name}</h3>
        <div className="ratingContainer">{avgRating} ⭐</div>
      </div>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="area">{areaName}</h4>
      <div className="costContainer">
        <ul>
          <li>{costForTwo}</li>
          <li>{sla.deliveryTime} MINS </li>
        </ul>
      </div>
    </div>
  );
};
export default RestaurantCard;