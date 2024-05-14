import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



function BacktoTopBtn() {
    const [backToTopBtn, setBackToTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setBackToTopBtn(true)
            } else {
                setBackToTopBtn(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
  return (
    <div>
        {backToTopBtn && <button className="fixed bottom-10 right-0 w-12 h-12 text-3xl dark:text-white" onClick={scrollTop}><FontAwesomeIcon icon={faArrowUp} /></button>}
    </div>)
}

export default BacktoTopBtn