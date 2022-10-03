const { createContext, useContext, useState, useReducer } = require("react");

const EventContext = createContext()

const EventProvider = ({children}) => {
  const   eventDetailsReducer = (acc,action) => {
        switch(action.type){
            case 'event_name' : return  {...acc, event_name : action.payload};
            case 'host_name' : return  {...acc, host_name : action.payload};
            case 'start_time' : return  {...acc, start_time : action.payload};
            case 'end_time' : return  {...acc, end_time : action.payload};
            case 'location' : return  {...acc, location : action.payload};
            case "event_image" : return {...acc, event_image : action.payload}
            default : return eventDetails;
        
        }
            }

    const [eventDetails, eventDispatch] = useReducer(eventDetailsReducer,{
        event_name : '',
        host_name : '',
        start_time : new Date(),
        end_time : new Date(),
        location : '',
        event_image : ''
    })
 
   



  return <EventContext.Provider value= {{eventDetails:eventDetails,eventDispatch:eventDispatch}}>
    {children}
  </EventContext.Provider>
}

const useEvent = () => useContext(EventContext)

export {EventProvider,useEvent}