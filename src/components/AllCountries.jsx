import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { v4 as uuidv4 } from 'uuid'
import { Fragment } from "react";
import NoResults from "./NoResults";

export default function AllCountries({ search, filteredRegion }) {
    
    const filtered = filteredRegion.filter((country) => {
        if (search === '' || country.name.common.toLowerCase().includes(search)) {
            return country;
        }
    })
  return (
        <div className="grid place-items-center items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:mx-[1.135rem] xl:mx-0 gap-8 md:gap-y-16 lg:gap-x-24 lg:gap-y-20">
                {!filtered.length ? <NoResults /> 
                : filtered.map((country) => (
                 <Fragment key={country.name.common}>
                    <Link to={`/Country/${country.name.common}`}>
                        <CountryCard key={uuidv4()} name={country.name.common} flags={country.flags} population={country.population} region={country.region} capital={country.capital} />
                    </Link>
                </Fragment>
            ))}
        </div>
  )
}