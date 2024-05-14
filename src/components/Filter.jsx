import Select from 'react-select'
import { useThemeContext } from '../hooks/useThemeContext';

export default function Filter( { selectedRegion, onFilter } ) {
  const { theme } = useThemeContext();
  
  
  const selectableRegions = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Antarctic', label: 'Antarctic' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ];

  const customStyles = {
    container: (styles) => ({
      ...styles,
      borderRadius: '.3rem',
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: 'dark:bg-darkElements',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      paddingBlock: '.5rem',
      paddingInline: '1rem',
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? 'hsl(209, 23%, 22%)' : 'white',
      borderRadius: '.3rem',
      marginTop: '.3rem',
      paddingBottom: '.5rem',
      paddingTop: '1rem',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'dark:text-white',
      fontWeight: theme === 'dark' ? '300' : '600',
      letterSpacing: '.025em',
    }),
    indicatorSeparator: styles => ({
      ...styles,
      display: 'none',
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: 'dark:text-paragraph',
      ':hover': {
        color: 'dark:text-paragraph',
      }
    }),
    option: (styles) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? 'hsl(209, 23%, 22%)' : 'white',
      color: theme === 'dark' ? 'white' : 'hsl(209, 23%, 22%)',
      cursor: 'pointer',
      fontWeight: theme === 'dark' ? '300' : '600',
      letterSpacing: '.025em',
      lineHeight: '1.2',
      paddingBottom: '.5rem',
      paddingLeft: '1.5rem',
      paddingTop: '0',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'dark:white',
      cursor: 'pointer',
    }),
  };
  
  return (
    <>
      <div className="flex ms-0 md:my-8 md:-me-[.1rem]">
        <Select styles={customStyles} className='dark:text-white dark:bg-darkElements text-content shadow-component transition-all duration-[.3s] text-start' isClearable value={selectedRegion} onChange={onFilter} options={selectableRegions} placeholder='Filter by Region' />
      </div>
    </>
  )
}
