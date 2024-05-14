import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';



const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useThemeContext();
    useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
    } else {
      document.body.style.backgroundColor = 'white'
    }
  }, [theme])

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