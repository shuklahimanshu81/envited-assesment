import { useNavigate } from 'react-router-dom'
import LandingPageImage from '../Assets/Landing_page_image.svg'

const Landing = () => {
    const navigate = useNavigate()
    const CreateEventHandler = () => {
       navigate('/create')
    }
    return <div className="landing-page h-screen flex flex-col items-center pt-20"> 
    <div className=''>
        <p className='landing-heading text-center text-3xl font-semibold pb-4'>Imagine if <span className='block'> Snapchat</span> had events</p>
        <p className='font-extralight text-center text-2xl leading-7 flex-none grow-0 order-none'>Easily host and share events with your friends across any social media.</p>
        
     </div>
     <div className='w-2/3 flex justify-center my-6'><img className='w-2/3' src={LandingPageImage} /></div>
     <button onClick={() => CreateEventHandler()} className='create-event-btn float-right w-3/4 text-xl p-4 my-4 rounded-xl '>🎉 Create my event</button>
    </div>
}
export default Landing;