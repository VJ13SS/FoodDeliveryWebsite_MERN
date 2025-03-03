import "./exploreMenu.css";
import menuList from "./menulist";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Coose from a diverse menu featuring a delecatable array of dishes
        refined with the finest taste.!Explore the Indulgence
      </p>
      <div className="explore-menu-list">
        {menuList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.item ? "All" : item.item))
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                src={item.image}
                alt=""
                className={category === item.item ? "active" : ""}
              />
              <p>{item.item}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
