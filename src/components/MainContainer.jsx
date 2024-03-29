import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import OverviewCards from './OverviewCards'
import Pagination from './Pagination'

const MainContainer = () => {
  return (
    <div className="grow">
          <Navbar />
          <main className=' p-8 space-y-6'>
            <aside className='flex justify-between items-center'>
              <h1 className='text-text-dark text-xl font-medium'>Overview</h1>
              <select className='p-2 bg-white border-2 rounded-md text-text font-medium'>
                <option>Last Month</option>
              </select>
            </aside>
            <OverviewCards />
            <h1 className='text-text-dark text-xl font-medium'>Transactions | This Month</h1>
            
            <Table />
            <Pagination/>
            
          </main>
    </div>
  )
}

export default MainContainer