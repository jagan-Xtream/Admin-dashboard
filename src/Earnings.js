import React from 'react';
import EarningCard from './EarningCard';

function Earnings(){
let jsonCard=[
    {
        title:'EARNINGS(MONTHLY)',
        price:'$40,000',
        symbol:"bi bi-calendar-fill",
        color:"text-primary h-100 py-2",
        border:"card border-primary shadow h-100 py-2"
    },
    {
        title:'EARNINGS(ANNUAL)',
        price:'$215,000',
        symbol:"bi bi-currency-dollar",
        color:"text-success h-100 py-2",
        border:"card border-success shadow h-100 py-2"
    },
    {
        title:'TASKS',
        price:'50%',
        symbol:"bi bi-journal-text",
        color:"text-info h-100 py-2",
        border:"card border-info shadow h-100 py-2"
    },
    {
        title:'PENDING REQUESTS',
        price:'18',
        symbol:"bi bi-chat",
        color:"text-warning h-100 py-2",
        border:"card border-warning shadow h-100 py-2"
    }
];

return(
    <div className="mt-3">
        <header>
            <EarningCard jsonCard={jsonCard}/>
        </header>
    </div>
)
}
export default Earnings;