import React, {useState} from 'react'
import './styles.css'
import PlaceHolderImg from '../../assests/images/image_placeholder.jpg'

import { NavLink } from 'react-router-dom'

export default function CreateEventPage() {
    const [image, setImage] = useState(false)
  return (
    <div className='createEvent'>
        <div className='createEvent__header'>
            <h1 className='createEvent__header__heading'>Create Event</h1>
            <div className='createEvent__header__form'>
                <div className='createEvent__header__form_inputContainer'>
                <label> Event name</label>
                <input type="text" />
                </div>
                <div className='createEvent__header__form_inputWrapper'>
                    <div className='createEvent__header__form_inputContainer'>
                    <label> Host name</label>
                    <input type="text" />
                    </div>
                    <div className='createEvent__header__form_inputContainer'>
                    <label> Location</label>
                    <input type="text" />
                    </div>
                </div>
                <div className='createEvent__header__form_inputWrapper'>
                    <div className='createEvent__header__form_inputContainer'>
                    <label> Start date</label>
                    <input type="date" />
                    </div>
                    <div className='createEvent__header__form_inputContainer'>
                    <label> End date</label>
                    <input type="date" />
                    </div>
                </div>
                <NavLink to='/event' className='createEvent__btn'>
                    Save
                </NavLink>
                
            </div>
        </div>
        <label for="img">
            <div className='createEvent__imageContainer' >
                {image?<img src={image} alt="" />:<img src={PlaceHolderImg} alt="" />}
            </div>
            <input type="file" id='img' style={{display:'none'}} accept=".jpg,.png" onChange={(event)=>setImage(URL.createObjectURL(event.target.files[0]))}/>
        </label>
        {Image}
    </div>
  )
}
