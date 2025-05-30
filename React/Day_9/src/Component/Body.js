import React, { useState, useEffect } from 'react';

function Body() {
    const [profile, setProfile] = useState([]);
    const [numberofProfiles, setNumberOfProfiles] = useState("");

    async function generateProfiles(count) {
        const ran = Math.floor(1 + Math.random() * 1000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(() => {
        generateProfiles(10);
    }, []);

    return (
        <div className='but'>
            <input type='text' className='inpu' placeholder='search here' value={numberofProfiles} onChange={(e) => setNumberOfProfiles(e.target.value)}></input>
            <button onClick={() => generateProfiles(Number(numberofProfiles))}>Search Profile</button>

            <div className="profile">
                {
                    profile.map((value) => {
                        return (<div key={value.id} className="cards">
                            <img src={value.avatar_url} alt={value.login} />
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                        </div>)
                    })
                }
            </div>
        </div>
    );
}

export default Body;
