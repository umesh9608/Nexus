import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Github() {
    const { name } = useParams();
    // console.log(data)
    const [profile, setProfile] = useState(null);

    async function fetchuser() {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect(() => {
        fetchuser();
    }, [])
    return (
        <>

            <h1>my git hub profile</h1>
            {/* display user data */}
            <div>
                <img src={profile?.avatar_url}></img>
                <h2>{profile?.login}</h2>
            </div>

        </>
    )
}