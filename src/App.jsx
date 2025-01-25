import { useState } from 'react';
import people from './data'
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight} from 'react-icons/Fa';
const App = () => {
  const [zmienna,setZmienna] = useState(0);
 const {name, job ,image, text} = people[zmienna];

 const nextPerson = () => {
  setZmienna((obecnaZmienna)=>{
    const nowaZmienna = obecnaZmienna + 1;
    if(nowaZmienna > people.length - 1){
      return 0;
    }
    return nowaZmienna;
  })
 };
 const prevPerson = () => {
  setZmienna((obecnaZmienna)=>{
    const nowaZmienna = obecnaZmienna - 1;
    if(nowaZmienna < 0){
      return people.length - 1;
    }
    return nowaZmienna;
  })
 };
 
  return (
    <main>
     <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
          <div className="btn-container">
          <button type="button" className='prev-btn'onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button type="button" className='next-btn'onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
          </div>
     </article>
    </main>
  );
};
export default App;
