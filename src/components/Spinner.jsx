import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Spinner = () => {
  return (
    <div className='w-screen h-screen dark:bg-darkBg flex justify-center items-center'>
        <span><FontAwesomeIcon className='dark:text-white text-3xl animate-spin' icon={faSpinner} /></span>
    </div>
  )
}

export default Spinner