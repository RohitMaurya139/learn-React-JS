// ✅ Importing required components and hooks
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // ✅ Initial state for all restaurants (mock data for now)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // ✅ State for filtered restaurants based on search/filter criteria
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  // ✅ Controlled input for the search text
  const [searchText, setSearchText] = useState("");

  // ✅ Fetch real restaurant data from Swiggy API when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // 🔧 Async function to fetch data from Swiggy API
  const fetchData = async () => {
    const data = await fetch(
      // ❗ Replace this URL if Swiggy API structure changes
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7085176&lng=77.1760415&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
  console.log(
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

    // ✅ Extract restaurant list from nested JSON structure
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    // ✅ Update both master list and filtered list
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // ❗ Conditional rendering: Show shimmer loader if data is not yet loaded
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* ✅ Search box container */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            value={searchText} // ✅ Controlled input for live state tracking
            onChange={(e) => setSearchText(e.target.value)} // ✅ Update state on typing
            placeholder="Search"
            className="search-input"
          />

          {/* 🔍 Search Button */}
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

        {/* ✅ Filter Buttons */}
        <div className="filter-container">
          {/* ⭐ Filter by Rating */}
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.0
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>

          {/* 💰 Filter by Cost */}
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.costForTwo <= 300
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Less than ₹300
          </button>

          {/* ⏱️ Filter by Delivery Time */}
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.sla.deliveryTime <= 35
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Fast Delivery
          </button>
        </div>
      </div>

      {/* ✅ Render restaurant cards */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
/* 
✅ Suggestions to Improve Next
1. ❓Add Reset Filters Button – To bring back the original listOfRestaurants after filtering.

2. 🔧 Replace all res.data usage with res.info if you shift from mockData to live Swiggy API (as their structure uses info).

3. ❗Always keep a master list (listOfRestaurants) and never mutate it directly when filtering.


*/