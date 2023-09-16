
import { useState } from 'react';
import {data} from '../../data/data'




const Destination = () => {
  const destinations = data.destinations
  const [planet, setplanet] = useState(destinations[0])
  const [active, setactive] = useState(0)



  const handledestinations = (index) => {
    setplanet(destinations[index])
    setactive(index)
  }




  return (
    <section className="text-white">
      <h1 className='text-[1.25rem] sm:text-[1.5rem]'><span className='text-gray-300 mr-2'>01</span>PICK YOUR DESTINATION</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <picture className='flex-1 p-12'>
          <source srcSet={planet.images.png} alt={planet.name} type='image/webp' />
          <img src={planet.images.webp} alt={planet.name} />
        </picture>
        <div className='flex-1 flex flex-col items-center lg:items-start'>
          <ul className='flex gap-4'>
            {destinations.map((eachPlanet, index) => (
              <li key={eachPlanet.name} className={`${index === active ? 'border-b border-white pb-3 text-white': 'text-gray-300'} text-[1.25rem] cursor-pointer`} onClick={() => handledestinations(index)}>
                {eachPlanet.name}
              </li>
            ))}
          </ul>
            <h1 className='text-[6.5rem]'>{planet.name}</h1>
            <p className='text-center lg:text-start mb-6 text-gray-300'>{planet.description}</p>
            <div className='w-full bg-gray-300 h-[1px] mb-4'></div>
            <div className='w-full flex justify-around lg:justify-start text-[2rem] text-gray-300'>
              <p className='mr-6'><span className='text-[1rem] block'>AVG. DISTANCE</span>{planet.distance}</p>
              <p className=''><span className='text-[1rem] block'>EST. TRAVEL TIME</span>{planet.travel}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
