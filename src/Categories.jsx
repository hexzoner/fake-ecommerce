import { capitalize } from "./App";
import { Navigate } from "react-router-dom";

function navigate() {
  Navigate("/");
}

export default function Categories({ categories, setSelectedCategory }) {
  function handleClick(e) {
    e.target.textContent === "All" ? setSelectedCategory("") : setSelectedCategory("/category/" + e.target.textContent.toLowerCase());
    // navigate();
    // Navigate("/");
  }

  return (
    <div className="m-4">
      {categories.length > 0 ? (
        <div className="flex gap-4 m-auto justify-evenly max-w-[600px]">
          <div onClick={handleClick} className="hover:cursor-pointer hover:text-error">
            All
          </div>
          {categories.map((category) => {
            return (
              <div key={category} onClick={handleClick} className="hover:cursor-pointer hover:text-error">
                {capitalize(category)}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center">Loading categories...</div>
      )}
    </div>
  );
}
