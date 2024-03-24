import React, { useState, useEffect } from 'react';
import "./styles.css";

const Swipe = () => {
    const [counter, setIndex] = useState(0);
    const [selectedOrgs, setSelectedOrgs] = useState([]);
    const [orgs, setOrgs] = useState([
        { name: 'Out in STEM', topics: 'Engineering' },
        { name: 'Artificial Intelligence Society', topics: 'Artificial Intelligence' },
        { name: 'Combat Robotics', topics: 'Engineering' },
        { name: 'Computer Security Group', topics: 'Cybersecurity' },
        { name: 'Cybersecurity Club', topics: 'Cybersecurity' },
        { name: 'Developer Student Club', topics: 'Computer Science' },
        { name: 'Girls Who Code', topics: 'Computer Science' },
        { name: 'Institute of Electrical and Electronics Engineers', topics: 'Electrical' },
        { name: 'National Society of Black Engineers', topics: 'POC' },
        { name: 'Society of Asian Scientists and Engineers', topics: 'POC' },
        { name: 'Society of Women Engineers', topics: 'Women' },
        { name: 'Women Who Compute', topics: 'Women' }
    ]);


const swipeLeft = () => {
    setIndex(counter + 1);
};

const swipeRight = (org) => {
    setSelectedOrgs([...selectedOrgs, org]);
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
          <p>{orgs[counter].topics}</p>
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