import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../hooks/useThemeContext';



const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <>
            <div className="flex gap-2">
                <span className='-rotate-[25deg] lg:pt-1'><FontAwesomeIcon icon={theme === 'dark' ? fas.faMoon : far.faMoon} /></span>
                <button className='dark:font-light font-semibold' onClick={toggleTheme}>Dark Mode</button>
            </div>
        </>
    )
}

export default ThemeSwitcher