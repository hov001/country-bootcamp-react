import "./App.css";
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard/CountryCard";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.REACT_APP_API_URL);
      const data = await res.json();

      console.log(data);
      setCountries(data);
    }

    fetchData();
  }, []);

  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  return (
    <div style={divStyle}>
      {countries
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map(({ name, flags }) => (
          <CountryCard
            title={name.common}
            image={flags.png}
            link={`https://en.wikipedia.org/wiki/${name.common}`}
            style={{
              margin: "10px",
            }}
          />
        ))}
    </div>
  );
}
