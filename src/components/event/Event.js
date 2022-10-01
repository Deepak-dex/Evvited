import React from "react";
import './styles.css'
import {IoIosArrowForward} from 'react-icons/io'


export default function Event({img,header,des}) {
  return (
    <div className="events__header__eventList_item">
      {img}
      <div className="events__header__eventList_item_content">
        <h3>{header}</h3>
          {des}
      </div>
      <IoIosArrowForward className="events__header__eventList_item_arrow" />
    </div>
  );
}
