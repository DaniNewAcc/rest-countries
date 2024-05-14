import { useState } from 'react';
import Header from '../components/Header';
import AllCountries from '../components/AllCountries';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import BacktoTopBtn from '../components/BacktoTopBtn';


export default function Home({ title }) {
    const [search, setSearch] = useState('');
    const [selectedRegion, setSelectedRegion] = useState(null);
    const { data } = useFetch("https://restcountries.com/v3.1/all");
    
    const filteredRegion = selectedRegion ? data?.filter((country) => country.region.includes(selectedRegion.value)) : data;

    document.title = title

    return (
        <>
            {!filteredRegion ? <Spinner /> : 
            <>
                <Header />
                <section className='flex flex-col md:flex-row md:justify-between gap-y-10 mx-5 md:mx-16 mt-6 mb-11 md:my-4'>
                    <SearchBar searchFilter={(e) => setSearch(e.target.value)} />
                    <Filter value={selectedRegion} onFilter={(e) => setSelectedRegion(e)} />
                </section>
                <section className='mx-8 mb-8 md:mx-16'>
                    <AllCountries search={search} filteredRegion={filteredRegion} />
                    <BacktoTopBtn />
                </section>
            </>
            }
        </>
    )
}
