import React from 'react'



const AmountCard=({processed})=>
{
    return (
        <li className='rounded-lg grow flex flex-col space-y-4 p-5 bg-white' style={{boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
            <header className='flex space-x-2 items-center text-text'>
            {processed
            ?<h1 className=''>Amount received</h1>:
            <h1 className=''>Online orders</h1>
            }
            </header>
            {processed
            ?<h1 className='text-dark text-3xl font-medium grow'>₹23,92,312.19</h1>
            :(<main className='flex items-center'>
                <h1 className='text-dark text-3xl font-medium grow'>231</h1>
                
            </main>)}
        </li>
    )
}

const OverviewCards = () => {
  return (
    <ul className='flex items-start space-x-5'>
        
        <AmountCard />
        <AmountCard processed={true} />
    </ul>
  )
}

export default OverviewCards