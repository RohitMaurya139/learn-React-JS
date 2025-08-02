import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // ! custom hook
   const onlineStatus = useOnlineStatus();
  useEffect(() => {
    // ✅ Load mock data
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, []);

  // ❗ Shimmer loading
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  if (!onlineStatus) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#f44336",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h3>You are offline. Some features may not be available.</h3>
          <h4>Please your internet Connection</h4>
        </div>

        <Shimmer />
      </>
    );
}
  return (
    <div className="body">
      {/* 🔍 Search */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className="search-input"
          />
          <button
            className="search-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* 🧪 Filter Buttons */}
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.0
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Top Rated
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) => {
                const cost = parseInt(
                  res.info.costForTwo.replace(/[^\d]/g, "")
                );
                return cost <= 300;
              });
              setFilteredRestaurants(filtered);
            }}
          >
            Less than ₹300
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.info.sla.deliveryTime <= 35
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Fast Delivery
          </button>

          {/* 🔁 Reset Button */}
          <button
            className="Reset-btn"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* 🧾 Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <h3>No restaurants match your filter/search.</h3>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
