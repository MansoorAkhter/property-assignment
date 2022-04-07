import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './propertyCard.css';

function ProperytCard({ detail, indexNumber }) {
  console.log('key==>>>', indexNumber);
  console.log(indexNumber, "==>>>", localStorage.getItem(indexNumber))


  const [heart, setHeart] = useState(JSON.parse(localStorage.getItem(indexNumber)));
  console.log(heart);

  const navigation = useNavigate();

  useEffect(() => {
    console.log(indexNumber, "==>>>", localStorage.getItem(indexNumber));
  }, [heart]);

  const heartStorageHandler = () => {
    console.log('clicked');
    setHeart(!heart)
    localStorage.setItem(indexNumber, !heart);
  };

  const pageNavigation = () => {
    console.log('page clicked==>>', indexNumber);
    navigation(`/singleBuilding/${detail?.mlsId}`, {
      state: {
        indexNumber: indexNumber
      }
    });
  };

  console.log('detail===>>>', detail);


  return (
    <div className="propertyComp" >
      <img
        className="heart"
        src={heart ? 'images/heart-fill.svg' : 'images/heart-stroke.svg'}
        onClick={heartStorageHandler}
      />
      <img className="propertyImg" src={detail?.photos[0]} alt="" onClick={pageNavigation}/>
      <div className="propertyText" onClick={pageNavigation}>
        <h5>
          {detail?.property?.bedrooms} BR | {detail?.property?.bathsFull}
          {detail?.property?.bathsHalf} Bath | {detail?.property?.area} Sq Ft
        </h5>
        <h3>${detail?.listPrice}</h3>
        <h6>
          {detail?.address?.streetNumber} {detail?.address?.streetName},{' '}
          {detail?.address?.city}
        </h6>
        <span className="listed">
          Listed: {detail?.listDate?.split('T')[0].split('-')[2]}/
          {detail?.listDate?.split('T')[0].split('-')[1]}/
          {detail?.listDate?.split('T')[0].split('-')[0].slice(2)}
        </span>
      </div>
    </div>
  );
}

export default ProperytCard;
