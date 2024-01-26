import Search from '@/ui/Search/Search'
import data from '../../data/data.json'
import './index.scss'

export function Customers () {
    return (
        <div className="customers">
            <header className='customers__header'>
                <div className="customers-info">
                    <h2 className='customers__title'>All Customers</h2>
                    <div className='customers__active-members'>Active Members</div>
                </div>
               <Search/>
            </header>

            <main className='customers__table'>
                <table className='table'>
                    <thead className='table__head'>
                        <tr className='table__row'>
                            <th className='table__cell'>Customer Name</th>
                            <th className='table__cell'>Company</th>               
                            <th className='table__cell'>Phone Number</th>                    
                            <th className='table__cell'>Email</th>                   
                            <th className='table__cell'>Country</th>
                            <th className='table__cell'>Status</th>                
                        </tr>
                        <div className='table__border-full'/>
                    </thead>

                    {
                        data.map(entry => (
                            <tbody className='table__body'>
                                <tr className='table__row'>
                                    <td className='table__cell' data-label="Customer Name">{entry.name}</td>
                                    <td className='table__cell' data-label="Company">{entry.company}</td>
                                    <td className='table__cell' data-label="Phone Number">{entry.phone}</td>
                                    <td className='table__cell' data-label="Email">{entry.email}</td>
                                    <td className='table__cell' data-label="Country">{entry.country}</td>
                                    <td className='table__cell table__status' data-label="Status">

                                    {
                                        entry.status === 'Active' 
                                            ? <p className='table__status-active'>{entry.status}</p>
                                            : <p className='table__status-inactive'>{entry.status}</p>
                                    }
                                        
                                    </td>                          
                                </tr>
                                <div className='table__border'/>
                            </tbody>
                        ))
                    }
                </table>
            </main>

            <footer className='customers-footer'>
                <div className='customers-footer__wrap'>
                    <div  className='customers-footer__data'>Showing data 1 to 8 of 256K entries</div>
                    <div  className='customers-footer__pagination'>
                        <p className='pagination-item'>&#10094;</p>
                        <p className='pagination-item item-active'>1</p>
                        <p className='pagination-item'>2</p>
                        <p className='pagination-item'>3</p>
                        <p className='pagination-item'>4</p>
                        <p className='pagination-item__dots'>...</p>
                        <p className='pagination-item'>40</p>
                        <p className='pagination-item'>&#10095;</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}