import { FormEvent, useEffect, useState } from "react";
import { api } from "../../services/api";

interface CharactersProps {
    name: string;
    gender: string;
    image: string;
    location: string;
    origin: string;
    species: string;
    status: string;
}

export function Search() {

    const [characters, setCharacters] = useState<CharactersProps[]>([]);
    const [searchCharacter, setSearchCharacter] = useState('');
    const [profile, setProfile] = useState<CharactersProps>();

    useEffect(() => {
        api.get('character')
            .then((response) => {
                setCharacters(response.data.results)
                console.log(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    function searchProfile(event: FormEvent) {
        event.preventDefault();

        characters.forEach((profile) => {
            if (profile.name.toLowerCase() === searchCharacter.toLowerCase()) {
                setProfile(profile);
            }
        })

        setSearchCharacter('');
    }

    console.log(characters, 'aa');

    return (
        <div>
            <form action="GET" onSubmit={searchProfile}>
                <input type="text" placeholder="Search for character" onChange={event => setSearchCharacter(event.target.value)} />
                <button type="submit">Search</button>
            </form>

            <div className="profile">

                {profile && (
                    <div className="about-profile">

                        <img src={profile.image} alt={profile.name} />
                        <div className="infos">
                            <strong>name:</strong>
                            <p>{profile.name}</p>
                        </div>
                        <div className="infos">
                            <strong>gender:</strong>
                            <p>{profile.gender}</p>
                        </div>
                        <div className="infos">
                            <strong>location:</strong>
                            <p>{profile.location}</p>
                        </div>
                        <div className="infos">
                            <strong>origin:</strong>
                            <p>{profile.origin}</p>
                        </div>
                        <div className="infos">
                            <strong>species:</strong>
                            <p>{profile.species}</p>
                        </div>
                        <div className="infos">
                            <strong>status:</strong>
                            <p>{profile.status}</p>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}