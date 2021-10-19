import React, { useState } from 'react';
import './CollectionPreview.scss';
import CollectionItem_38 from './CollectionItem_38';
import Sneakers from './collection-items-data';
import Womens from './collection-items-data-2';
function CollectionPreview() {
  const [collectItemsSneakers, setCollectionItemsSneakers] = useState(Sneakers);
  const [collectItemsWomens, setCollectionItemsWomens] = useState(Womens);
  return (
    <div>
      <h2 className='title'>Sneakers</h2>
      <div className='priview'>
        {collectItemsSneakers.map((item) => {
          const { id, name, remoteUrl, price } = item;
          return (
            <CollectionItem_38
              id={id}
              name={name}
              remoteUrl={remoteUrl}
              price={price}
            />
          );
        })}
      </div>
      <h2 className='title'>Womens</h2>
      <div className='priview'>
        {collectItemsWomens.map((item) => {
          const { id, name, remoteUrl, price } = item;
          return (
            <CollectionItem_38
              id={id}
              name={name}
              remoteUrl={remoteUrl}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CollectionPreview;
