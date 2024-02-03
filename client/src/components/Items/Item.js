import React from 'react'
import'./Item.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Item() {
  const dispatch = useDispatch();
  const { allitem_data } = useSelector((state) => state.allitem);
  console.log(allitem_data);
  return (
    <div>
      <div className='item'>
        <Link to={`/product/${allitem_data._id}`}>
        <img src={allitem_data.image}/></Link>
        <p>${allitem_data.name}</p>
      </div>
      <div className='item-prices'>
        <div className='item-prices-new'>${allitem_data.new_price}</div>
      </div>
      <div className='item-price-old'>
        {allitem_data.old_items}
      </div>
    </div>
  )
}
