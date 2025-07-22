import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData;

  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImageId} alt="Restaurant Logo" />
      <div className="res-name">
        <h3>{name}</h3>
        <div className="ratingContainer">{avgRating} ⭐</div>
      </div>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>

      <div className="costContainer">
        <ul>
          <li>₹{costForTwo / 100} FOR TWO</li>
          <li>{deliveryTime} MINS </li>
        </ul>
      </div>
    </div>
  );
};
export default RestaurantCard;