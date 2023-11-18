
import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByYear, setSortByYear] = useState(false);
  
  const sortedData = [...data];

  if (sortByYear) {
    sortedData.sort((a, b) => (a.year > b.year ? 1 : -1));
  }

  return (
    <>
      <div className="templateContainer">
        <div className="filterContainer">
          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="text"
              placeholder="Search by title or year..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="yearFilterContainer">
            <label htmlFor="sortFilter">Sort by Year:</label>
            <input
              id="sortFilter"
              type="checkbox"
              checked={sortByYear}
              onChange={() => setSortByYear(!sortByYear)}
            />
          </div>
        </div>
        <div className="template_Container">
          {sortedData
            .filter((val) => {
              const titleMatch = val.title.toLowerCase().includes(searchTerm.toLowerCase());
              const yearMatch = val.year ? val.year.toString().includes(searchTerm) : false;
              return titleMatch || yearMatch;
            })
            .map((val) => (
              <div className="template" key={val.id}>
                <a href={val.link} target="_blank" rel="noopener noreferrer">
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  {val.year && <p>Year: {val.year}</p>}
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}


export default App;





