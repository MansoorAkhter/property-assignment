import './property.css';
import ProperytCard from './ProperytCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Property(props) {
  const [property, setProperty] = useState([]);

  const navigation = useNavigate();

  useEffect(async () => {
    const resApi = await axios.get('https://api.simplyrets.com/properties', {
      auth: {
        username: 'simplyrets',
        password: 'simplyrets',
      },
    });

    console.log(resApi.data);
    setProperty(resApi.data);
  }, []);

  const pageNavigation = (index) => {
    console.log('page clicked==>>', index);
    navigation(`/singleBuilding/${index}`);
  };

  return (
    <>
      <div className="navbar">
        <img src="images/logo.png" alt="Logo" className="navbarLogo" />
        <h2>ApnaGhar</h2>
      </div>

      <div className="propertyMain">
        <div className="propertyWrapper">
          <div className="propertyTopbar">
            <h4>Property Listings</h4>
          </div>
          <div className="propertyCard">
            {property.map((item, index) => (
                <ProperytCard detail={item} key={index} indexNumber={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
