import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColorCard=(props)=>{
    return(
              <div class="row" style={{width:"50%"}}>
              {
                  props.jsonCard.map((card)=>{
                      return(
                        <div class="col-lg-6 mb-4">
                                    <div class={card.color}>
                                        <div class="card-body">
                                            {card.title}
                                            <div class="text-white-50 small">{card.colorcode}</div>
                                        </div>
                                    </div>
                                </div>
                      )
                      
})  
 } 
 </div>
)}
export default ColorCard;