import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router"
import axios from "axios";
import { Link } from "react-router-dom";

const SingleBuilding = () => {
  const { buildingId } = useParams()
  const location = useLocation()

  const navigate = useNavigate()

  console.log(location.state.indexNumber)

  const [heart, setHeart] = useState(JSON.parse(localStorage.getItem(location.state.indexNumber)));


  const [property, setProperty] = useState();

  useEffect(async () => {
    const resApi = await axios.get(`https://api.simplyrets.com/properties/${buildingId}`, {
      auth: {
        username: 'simplyrets',
        password: 'simplyrets',
      },
    });


    console.log("building data single===>>>", resApi.data);
    setProperty(resApi.data);
  }, []);

  useEffect(() => {
    console.log(location.state.indexNumber, "==>>>", localStorage.getItem(location.state.indexNumber));
  }, [heart]);

  const heartStorageHandler = () => {
    console.log('clicked');
    setHeart(!heart)
    localStorage.setItem(location.state.indexNumber, !heart);
  };

  const homePageNavigation = () => {
    navigate('/')
  }

  return (
    <>
      <div className="navbar">
        <img src="/images/logo.png" alt="Logo" className="navbarLogo" onClick={homePageNavigation} />
        <h2  onClick={homePageNavigation}>ApnaGhar</h2>
      </div>
      <div className="propertyMain">
        <div className="propertyWrapper">
          <div className="propertyTopbar">
            <h4>Property Listings</h4>
          </div>
          <div className="propertyCard">
            <div className="propertyComp">
              <img
                className="heart"
                src={heart ? '/images/heart-fill.svg' : '/images/heart-stroke.svg'}
                onClick={heartStorageHandler}
              />
              <img className="propertyImg" src={property?.photos[0]} alt="" />
              <div className="propertyText">
                <h5>
                  {property?.property?.bedrooms} BR | {property?.property?.bathsFull}
                  {property?.property?.bathsHalf} Bath | {property?.property?.area} Sq Ft
                </h5>
                <h3>${property?.listPrice}</h3>
                <h6>
                  {property?.address?.streetNumber} {property?.address?.streetName},{' '}
                  {property?.address?.city}
                </h6>
                <span className="listed">
                  Listed: {property?.listDate?.split('T')[0].split('-')[2]}/
                  {property?.listDate?.split('T')[0].split('-')[1]}/
                  {property?.listDate?.split('T')[0].split('-')[0].slice(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBuilding