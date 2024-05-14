import './styles/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useThemeContext } from '../hooks/useThemeContext';


export default function SearchBar({ searchFilter }) {
  const { theme } = useThemeContext()
  return (
    <div className="dark:bg-darkElements shadow-component flex items-center justify-start gap-7 rounded-[.3rem] md:my-8 py-3 ps-8 w-full md:w-2/5 transition-all duration-[.3s]">
        <span className='dark:text-white text-input'><FontAwesomeIcon icon={faSearch} /></span>
        <input className={`${theme === 'dark' ? 'search' : 'search-light'} dark:placeholder:text-white dark:text-white focus:outline-none w-full bg-transparent placeholder:font-light`} onChange={searchFilter} type="search" placeholder="Search for a country..."/>
    </div>
  )
}
