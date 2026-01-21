import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  console.log(restaurantData.info.name, restaurantData.info.cuisines);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurantData?.info;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#feefca" }}>
      <img
        className="restaurant-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
