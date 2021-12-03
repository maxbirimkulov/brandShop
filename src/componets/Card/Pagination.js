import React from 'react';

const Pagination = ({pageNumber, setPageNumber,shoesForCard,countCard }) => {
    let pagination = [];

    for (let i = 1; i <= Math.ceil(shoesForCard.length / countCard); i++){
        pagination.push(i)
    }



    return (
       <ul className='paginations'>
           <li style={pageNumber > 1 ? {display: 'block'} : {display: 'none'}} className='pagination__item pagination__item_arrow' onClick={()=> setPageNumber(prev => prev - 1)}>Prev</li>
           {pagination.map((item,idx)=>(
               <li
                   key={item}
                   onClick={()=> setPageNumber(item)}
                   className={`${pageNumber === item ? 'active' : ''} pagination__item`}
               >{item}</li>
           ))}
           <li style={pageNumber < pagination.length ? {display: 'block'} : {display: 'none'}} className='pagination__item pagination__item_arrow' onClick={()=> setPageNumber(prev => prev + 1)}>Next</li>
       </ul>
    );
};

export default Pagination;