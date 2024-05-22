import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import BackBtn from '../components/BackBtn';
import useFetch from '../hooks/useFetch';
import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { FormatList } from '../utils/FormatList';


export default function Details() {
  const { data } = useFetch('https://restcountries.com/v3.1/all')
  const params = useParams();

  
  const country = data?.find(country => country.name.common === params.name);
  
  document.title = `REST Countries | ${params.name}`

  const borderCountries = data?.filter(c => c.borders ? country.borders?.includes(c.cca3) : '');


  return (
    <main role='main'>
      <Header />
      <BackBtn />
      { country ? 
      <article className='dark:text-white text-content text-start text-base mb-16 mx-8 lg:mx-[6rem]'>
        <section className='flex flex-col lg:flex-row'> 
          <div className='shrink-0'>
            <img className='w-[320px] h-[200px] lg:w-[500px] lg:h-[350px] object-cover' src={country.flags.svg} alt={country.flags.alt} />
          </div>
          <div className="lg:ms-[5rem] xl:ms-[8rem] flex flex-col lg:justify-center">
            <h3 className='font-extrabold text-xl lg:text-3xl mt-8 mb-6 lg:mt-2 lg:mb-4'>{country.name.common}</h3>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-4">
              <div className="flex flex-col">
                {country.name.nativeName && <p className='font-semibold mb-3 lg:mb-2'>Native Name: <span className='font-light'>{(Object.values(country.name.nativeName)[0]?.common)}</span></p>}
                <p className='font-semibold mb-3 lg:mb-2'>Population: <span className='font-light'>{country.population.toLocaleString()}</span></p>
                <p className='font-semibold mb-3 lg:mb-2'>Region: <span className='font-light'>{country.region}</span></p>
                {country.subregion &&<p className='font-semibold mb-3 lg:mb-2'>Sub Region: <span className='font-light'>{country.subregion}</span></p>}
                {country.capital && <p className='font-semibold mb-3 lg:mb-2'>Capital: <span className='font-light'>{FormatList(Object.values(country.capital).map((capital) => capital))}</span></p>}
              </div>
              <div className='lg:ps-10 my-8 lg:my-0 lg:w-1/2'>
                <p className='font-semibold mb-3 lg:mb-2'>Top Level Domain: <span className='font-light'>{country.tld}</span></p>
                {country.currencies && <p className='font-semibold mb-3 lg:mb-2'>Currencies: <span className='font-light'>{FormatList(Object.values(country.currencies).map((c) => c.name))}</span></p>}
                {country.languages && <p className='font-semibold mb-3 lg:mb-2'>Languages: <span className='font-light'>{FormatList(Object.values(country.languages))}</span></p>}
              </div>
            </div>
            {country.borders && 
            <section key={uuidv4()} className='lg:flex lg:items-center lg:gap-8 md:mt-4 lg:mt-12'>
              <p className='font-semibold text-nowrap'>Border Countries:</p>
              <ul className="flex flex-wrap gap-x-2 gap-y-4 mt-6 lg:mt-0">
              {borderCountries?.map((borderCountry) => (
                  <Fragment key={uuidv4()}>
                    <Link to={`/Country/${borderCountry.name.common}`}>
                      <li className='dark:bg-darkElements dark:hover:bg-darkElements/40 hover:bg-gray-400/40 cursor-pointer rounded shadow-country transition-all duration-[.3s] font-light tracking-wide px-7 py-1'>{borderCountry.name.common}</li>
                    </Link>
                  </Fragment>
                ))}
              </ul>
            </section>
            }
          </div>
        </section>
      </article>
     : null }
    </main>
  );
}
