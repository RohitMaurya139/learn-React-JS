import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7085176&lng=77.1760415&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await data.json();
      // console.log(json);
      setRestaurantInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  // Destructure with fallback to avoid runtime errors
  const {
    name = "Restaurant Name",
    avgRating = "N/A",
    cuisines = [],
    costForTwoMessage = "",
    totalRatingsString = "",
    sla = { slaString: "N/A" },
    areaName = "",
  } = restaurantInfo?.cards?.[2]?.card?.card?.info || {};

  // Defensive assignment of menu items to avoid errors
  const itemCard =
    restaurantInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];

  return (
    <div className="menu-container">
      <h1 className="restaurant-name">{name}</h1>

      <div className="card1">
        <h3 className="rating-cost">
          ⭐ {avgRating} ({totalRatingsString}) &ensp; • &ensp;{" "}
          {costForTwoMessage}
        </h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4 className="outlet">Outlet: {areaName}</h4>
        <h4 className="sla">{sla.slaString} Deliver to home</h4>
      </div>

      <div className="card2">
        <h3>Menu</h3>
      </div>

      <div className="recommended">
        <h2>Recommended Items</h2>
        {itemCard.length > 0 ? (
          <div className="items-list">
            {itemCard.map((item) => (
              <div className="item-card" key={item.card.info.id}>
                <h3 className="item-name">{item.card.info.name}</h3>
                <h4 className="item-price">
                  ₹{(item.card.info.price || 0) / 100}
                </h4>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-items">
            <h4>No menu item available</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
