import { FormatList } from "../utils/FormatList";

export default function CountryCard({ name, population, region, capital, flags }) {
  return (
    <article className="w-[260px] h-full flex flex-col mx-0 mb-6 md:mb-12 transition-all duration-[.3s] hover:scale-110 ">
        <div>
          <img className='w-full h-[160px] object-cover rounded-t-lg' src={flags.svg} alt={flags.svg} />
        </div>
        <div className="dark:bg-darkElements dark:text-white h-full text-content shadow-lg transition-all duration-[.3s] flex flex-col gap-1 px-6 pt-6 pb-8 md:pb-0 text-start tracking-wide rounded-b-lg">
          <h3 className="font-extrabold text-lg md:text-base pb-3">{name}</h3>
          <p className="font-semibold">Population: <span className="font-light">{population.toLocaleString()}</span></p>
          <p className="font-semibold">Region: <span className="font-light">{region}</span></p>
          {capital && <p className="font-semibold">Capital: <span className="font-light">{FormatList(Object.values(capital).map((cap) => cap))}</span></p>}
        </div>
    </article>
  )
}
