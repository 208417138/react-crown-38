import './CollectionItem_38.scss';
function CollectionItem_38({ name, price, remoteUrl }) {
  return (
    <div>
      <div className='collection-item'>
        <img src={remoteUrl} alt='' className='image' />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <button className='custom-button'>Add to Cart</button>
      </div>
    </div>
  );
}

export default CollectionItem_38;
