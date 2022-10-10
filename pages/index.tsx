import type { NextPage } from 'next'
// import Head from 'next/head'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

import { incremented, amountAdded } from '../redux/features/somefeature/somefeature-slice';
import { useFetchSomeOtherFeatureCategoryQuery } from '../redux/features/someotherfeature/someotherfeature-api-slice'

const Home:NextPage = () => {

  const count = useAppSelector((state:RootState) => state.somefeature.value);
  const dispatch = useAppDispatch();

  const [numItems, setNumItems] = useState(10);
  const { data = [], isFetching } = useFetchSomeOtherFeatureCategoryQuery(numItems);

  function handleClick() {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }

  return (
    <div>

        <p>
          <button onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        
        <div>
          <p>Items to fetch:</p>
          <select value={numItems} onChange={(e) => setNumItems(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        
        <div>
          <p>Number of items fetched: {data.length}</p>
        </div>
        <div className="dogs">
        <h2>Dogs</h2>
        {data.map((breed) => (
          <div style={{display: 'flex'}} key={breed.id}>
            <div>{breed.name}</div>
            <div>
              <img src={breed.image.url} alt={breed.name} height={250} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home;
