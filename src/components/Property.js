import './property.css';
import ProperytCard from './ProperytCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Property(props) {
  const [property, setProperty] = useState([]);

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

  return (
    <div className="propertyMain">
      <div className="propertyWrapper">
        <div className="propertyTopbar">
          <h4>Property Listings</h4>
        </div>
        <div className="propertyCard">
          {property.map((item, index) => (
            <ProperytCard detail = {item} key = {index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Property;
