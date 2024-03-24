import React, { useState, useEffect } from 'react';

const Swipe = () => {
    const [index, setIndex] = useState(0);
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

        fetchData();
    }, []);

    const swipeLeft = () => {
        setIndex(index + 1);
    };

    const swipeRight = (org) => {
        setSelectedOrgs([selectedOrgs, org]);
        setIndex(index + 1);
    };

    return (
        <div>
            {index < orgs.length ? (
                <div>
                    <button onClick={swipeLeft}>Swipe Left ❌</button>
                    <div>
                        <h3>{orgs[index].name}</h3>
                        <p>{orgs[index].id}</p>
                    </div>
                    <button onClick={() => swipeRight(orgs[index])}>Swipe Right ✔️</button>
                </div>
            ) : (
                <p>No more organizations to show.</p>
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