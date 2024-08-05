import { useState } from "react";

export default function ShowList() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const data = {
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    India: ["Mumbai", "Delhi", "Bangalore"],
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity(""); // Reset city selection when country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h1>Country and City Selector</h1>
      <div>
        <label>
          Select a country:
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">--Select a country--</option>
            {Object.keys(data).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
      </div>
      {selectedCountry && (
        <div>
          <label>
            Select a city:
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">--Select a city--</option>
              {data[selectedCountry].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </div>
  );
}
