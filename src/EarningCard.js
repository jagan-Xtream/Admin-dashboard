import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const EarningCard=(props)=>{
    return(
        
              <div class="row">
              {
                  props.jsonCard.map((card)=>{
                      return(
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class={card.border}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class={card.color}>
                                                {card.title}</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800 ">{card.price}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class={card.symbol}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )
})  
 } </div>
    )
   
}
export default EarningCard;