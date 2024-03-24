import React, { useState, useEffect } from 'react';
import "./styles.css"
const Swipe = () => {

    const [counter, setIndex] = useState(0);
    const [selectedOrgs, setSelectedOrgs] = useState([]);
    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('./orgs.csv');
            const text = await response.text();
            const orgData = text.split('\n').map(row => {
                const [id, name, topics] = row.split(',');
                return { id, name, topics };
            });
            setOrgs(orgData);
        } catch (error) {
            console.error("Error fetching CSV.", error);
        }
    };

    fetchData();}, []);

const swipeLeft = () => {
    setIndex(counter + 1);
};

const swipeRight = (org) => {
    setSelectedOrgs([selectedOrgs, org]);
    setIndex(counter + 1);
};

return (
  <div className='page'>
    <h1>Swipe Match</h1>
    {counter < orgs.length ? (
      <div>
        <div className="swipe-buttons">
          <button className="left" onClick={swipeLeft}>Swipe Left ❌</button>
          <button className="right" onClick={() => swipeRight(orgs[counter])}>Swipe Right ✔️</button>
        </div>
        <div className="org-info">
          <h3>{orgs[counter].name}</h3>
          <p>{orgs[counter].id}</p>
        </div>
      </div>
    ) : (
      <p>No more organizations left to show.</p>
    )}

    {selectedOrgs.length > 0 && (
      <div>
        <h4>Selected Organizations:</h4>
        {selectedOrgs.map((org, index) => (
          <p key={index}>{org.name}</p>
        ))}
      </div>
    )}
  </div>
);
};

export default Swipe;