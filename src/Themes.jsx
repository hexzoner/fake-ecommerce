import React from "react";
export default function Themes() {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  function handleChange(e) {
    setTheme(e.target.value);
  }

  return (
    <select onChange={handleChange} value={theme} className="gradientselect w-[120px] h-[36px] px-2" data-choose-theme>
      {/* <option disabled className="bg-base-100" value="">
        Theme
      </option> */}
      {/* <option value="">Default</option> */}
      <option className="bg-base-100" value="light">
        Light
      </option>
      <option className="bg-base-100" value="dark">
        Dark
      </option>
      <option className="bg-base-100" value="cupcake">
        Cupcake
      </option>
      <option className="bg-base-100" value="valentine">
        Valentine
      </option>
    </select>
  );
}
