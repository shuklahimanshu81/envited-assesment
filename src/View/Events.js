import BirthdayCake from '../Assets/Birthday_cake.png'
import { FaCalendar } from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineRight} from 'react-icons/ai'
import { useEvent } from '../ContextProviders/EventsProvider';
const Events = () => {
    const {eventDetails} = useEvent();
    return <div className="">
        <img src={BirthdayCake} />
        <div className='flex flex-col p-6 items-start'>

        
        <p className='text-4xl font-bold text-dark-violet mb-1'>{eventDetails.event_name}</p>
        <p className='text-neutral-500 mb-4'>Hosted by <span className='font-semibold '>{eventDetails.host_name}</span></p>
        <div className='flex items-center justify-center mb-4'><FaCalendar  className='icon' /><p className='font-semibold text-dark-violet mr-1/2'>18 August 6:00PM <span className='block font-normal text-gray-500'>to <b className='text-gray-500'> 19 August 1:00PM </b> UTC +10</span></p> <AiOutlineRight className="text-gray-500 ml-8"/></div>
        <div className='flex items-center justify-center'><HiOutlineLocationMarker className='icon' /> <p className='font-semibold text-dark-violet'>Street name<span className='block font-normal text-gray-500'>Suburb, State, Postcode</span></p> <AiOutlineRight className="text-gray-500 ml-20"/></div>
        </div>
     </div>
}
export default Events