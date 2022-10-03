import { useState } from "react"
import DateTimePicker from "react-datetime-picker"
import {  useNavigate } from "react-router-dom"
import { useEvent } from "../ContextProviders/EventsProvider"

const CreateEvent = () => {
    const navigate = useNavigate()
    const {eventDetails,eventDispatch} = useEvent();



    return <div className="page h-screen text-xl">
     <div className="event-form h-screen flex flex-col justify-center items-center gap-4">
     <h1 className="text-4xl text-dark-violet text-center font-semibold"> Create Event</h1>
     <form className="flex flex-col justify-center items-center gap-4">
    <label className=" font-normal gap-4 text-dark-violet "> Event Name : </label>
    <input value={eventDetails.event_name} onChange={(e) => eventDispatch({type : 'event_name',payload:e.target.value})} className="bg-gray-300 p-2 rounded-2xl" type='text'/>
       <label className=" font-normal gap-4 text-dark-violet ">Host Name : </label>
       <input value={eventDetails.host_name} onChange={(e) => eventDispatch({type : 'host_name',payload:e.target.value})} className="bg-gray-300 p-2 rounded-2xl" type="text"/>
       <label className=" font-normal gap-4 text-dark-violet ">
            Event starts at:
       </label>
       <DateTimePicker value={eventDetails.start_time} onChange={(e) => eventDispatch({type:'start_time',payload:e})}/>
        <label className=" font-normal gap-4 text-dark-violet ">
            Event ends at:
        
       </label><DateTimePicker value={eventDetails.end_time} onChange={(e) => eventDispatch({type:'end_time',payload:e})} /> 
       <label className=" font-normal gap-4 text-dark-violet ">
            Event location:
        
        </label><input value={eventDetails.location} onChange={(e) => eventDispatch({type:'location',payload:e.target.value})} className="bg-gray-300 p-2 rounded-2xl" type="text"/>
       <label className="text-dark-violet ">
            Event Image:
       
        </label><input  onChange={(e) => eventDispatch({type:'event_image',payload:e.target.files[0]})} className="mx-1/2" type="file"/> 
        </form>
        <button onClick={() => { navigate('/events'); }} className="create-event-btn w-3/4 p-4 rounded-2xl">Next</button>
        </div>
    </div>
}

export default CreateEvent