import { useState } from 'react';
import data from './data';
import {
  FaBeer,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa';
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];
  const handleLeft = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = data.length - 1;
      }
      return newIndex;
    });
  };
  const handleRight = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex + 1;
      if (newIndex >= data.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  console.log(name);
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
      </article>

      <div className='btn-container'>
        <button className='prev-btn' onClick={handleLeft}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className='next-btn' onClick={handleRight}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </main>
  );
};
export default App;
