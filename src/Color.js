import React from 'react';
import ColorCard from './ColorCard';

function Color(){
let jsonCard=[
    {
        title:"Primary",
        color:"card bg-primary text-white shadow",
        colorcode:"#4e73df"
    },
    {
        title:"Success",
        color:"card bg-success text-white shadow",
        colorcode:"#1cc88a"
    },
    {
        title:"Info",
        color:"card bg-info text-white shadow",
        colorcode:"#36b9cc"
    },
    {
        title:"Warning",
        color:"card bg-warning text-white shadow",
        colorcode:"#f6c23e"
    },
    {
        title:"Danger",
        color:"card bg-danger text-white shadow",
        colorcode:"#e74a3b"
    },
    {
        title:"Secodary",
        color:"card bg-secondary text-white shadow",
        colorcode:"#858796"
    },
    {
        title:"Light",
        color:"card bg-light text-white shadow",
        colorcode:"#D7D0C9"
    },
    {
        title:"Dark",
        color:"card bg-dark text-white shadow",
        colorcode:"#5a5c69"
    },
];

return(
    <div className="mt-0">
        <header>
            <ColorCard jsonCard={jsonCard}/>
        </header>
    </div>
)
}
export default Color;