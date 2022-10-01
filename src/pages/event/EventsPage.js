import React from 'react'
import './styles.css'
import CakeImg from '../../assests/images/Birthday cake.png'

import {HiOutlineCalendar,HiLocationMarker} from 'react-icons/hi'

import Event from '../../components/event/Event'

export default function EventsPage() {
  return (
    <div className='events'>
        <div className='events__header'>
            <h1>Birthday Bash</h1>
            <span>Hosted by Elysia</span>
            <div className='events__header__eventList'>
                <Event 
                    header="18 August 6:00PM"
                    des = {<span>to <b>19 August 1:00PM</b> UTC +10</span>}    
                    img={<HiOutlineCalendar className="events__header__eventList_item_img"/>}
                />    
                <Event 
                    header="Street name"
                    des = {<span>Suburb, State, Postcode</span>}    
                    img={<HiLocationMarker className="events__header__eventList_item_img"/>}
                />    
            </div>
        </div>
        <img src={CakeImg} alt="" />
    </div>
  )
}
