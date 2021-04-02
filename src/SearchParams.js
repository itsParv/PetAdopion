import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropDown';

const SearchParams = () => {
    const [location, setLocation]= useState("Seattle, WA");
    // const [animal, setAnimal]= useState("dog");
    // const [breed, setBreed]= useState("");
    const [breeds, setBreeds]= useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);


    return(
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="location" onChange={e => setLocation(e.target.value)} />
                </label>

                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;