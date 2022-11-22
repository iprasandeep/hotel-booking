import React from 'react'
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Hotel = () => {

  const photos = [
    {
      src: ""
    }
  ]

  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className='hotelContainer'>
        <div className='hotelWrapper'>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Elton St 125 New York</span>
            <div className='hotelImages'>
              {photos.map(photo=>(
                <img src={photo.src} alt='' className='hotelImg' />
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
                <p className='hotelDesc'>
                  Etiam sollicitudin orci vitae magna mollis convallis. Nullam ac scelerisque sem. 
                  Suspendisse ornare lacus at dictum porta. Mauris ornare massa eu tristique semper. 
                  Cras congue dolor sit amet erat pulvinar dignissim. Nunc urna eros, eleifend et tempus eu, lobortis a purus. 
                  Donec luctus gravida nibh sed eleifend. Maecenas tempor, mi in porta auctor, est ex ultrices justo, id viverra tortor purus at metus. 
                  Fusce feugiat suscipit lobortis. Curabitur pulvinar justo at pretium blandit.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec laoreet risus iaculis ex congue pretium.
                </p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Kakow, this property has an exceellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b>(9 nights)
                </h2>
                <button>Reverse or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hotel