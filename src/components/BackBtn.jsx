import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const BackBtn = () => {
const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')} className='dark:text-white dark:bg-darkElements cursor-pointer text-content text-base font-light shadow-component w-[6.8rem] mx-8 lg:mx-[6rem] mt-10 lg:mt-14 mb-14 lg:mb-16 px-6 py-1 transition-all duration-[.3s]'>
        <span><FontAwesomeIcon className='me-2' icon={faArrowLeft} />Back</span>
    </div>
  )
}

export default BackBtn