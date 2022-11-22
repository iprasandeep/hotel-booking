import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { faLocationDot, faCircleXmark,faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

const handleOpen = (i) =>{
  setSlideNumber(i);
  setOpen(true)
}
const handleMove = (direction) => {
  let newSlideNumber;

  if (direction === "l") {
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  } else {
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  }

  setSlideNumber(newSlideNumber)
};
  return (
  <div>
   <Navbar />
   <Header type='list' />
   <div className='hotelContainer'>
   {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
     <div className='hotelWrapper'>
       <button className="bookNow">Reserve or Book Now!</button>
       <h1 className='hotelTitle'>Grand Hotel</h1>
       <div className='hotelAddress'>
         <FontAwesomeIcon icon={faLocationDot} />
         <span>Elton St 125 New York</span>
       </div>
       <span className='hotelDistance'>
         Excellenty location - 500m from center
       </span>
       <span className='hotelPriceHighlight'>
         Book a stay over $114 at this property and get a free airport taxi
       </span>
      <div className='hotelImages' >
          {photos.map((photo, i)=>(
            <div className='hotelImgWrapper'>
              <img onClick={handleOpen} src={photo.src} alt="" className="hotelImg" />
            </div>
          ))}
      </div>

      <div className="hotelDetails">
        <div className="hotelDetailTexts">
          <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
          <p className='hotelDesc'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
          soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut 
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
          consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
        <div className='hotelDetailPrice'>
          <h1> Perfect for a 9-night stay!</h1>
          <span>
            Location in the real heart of Krakow, this property has an excellent location scroe of 9.8!
          </span>
            <h2>
              <b>$945</b>(9 nights)
            </h2>
          <button>Reverse or Book Now!</button>
        </div>
      </div>
     </div>
     <MailList />
     <Footer />
   </div>
  </div>
  )
}

export default Hotel;