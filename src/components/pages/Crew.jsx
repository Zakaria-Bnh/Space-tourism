import { useEffect, useState } from "react";
import { data } from "../../data/data";

const Crew = () => {
  const crewdata = data.crew;

  const [memberindex, setmemberindex] = useState(0);
  // const [StartX, setStartX] = useState(0);
  const [currentmember, setcurrentmember] = useState(crewdata[memberindex]);





  useEffect(() => {
    // the container which we listen to its events
    const PictureCrsl = document.getElementById("image-carousel");

    // the functions for storing and calculating the points of start and finish of the touch screen
    let start
    const handletouch = (e) => {
      start = e.touches[0].clientX
      console.log(start, 'start point')
    }
    const handlemove = (e) => {
      const endtouch = e.touches[0].clientX
      console.log(endtouch, 'the point of end')
      const difference = endtouch - start
      console.log(difference, 'difference')
      const threshold = 70
      const lastmemeber = crewdata.length - 1
      const firstmember = 0

      if (difference >= threshold){
        setmemberindex(prevIndex => prevIndex === lastmemeber ? firstmember  : prevIndex + 1)
      } else if (difference <= -threshold) {
        setmemberindex(prevIndex => prevIndex === firstmember ? lastmemeber : prevIndex - 1)
      }
      start = 0
      console.log(memberindex, 'this is the index we currently at')
    }

    PictureCrsl.addEventListener('touchstart', handletouch)
    PictureCrsl.addEventListener('touchmove', handlemove)

    return () => {
      PictureCrsl.removeEventListener("touchstart", handletouch);
      PictureCrsl.removeEventListener("touchmove", handlemove);
    };
  }, [ memberindex]);

  // console.log(currentmember, 'tihs is the current member obj')

  return (
    <section className="text-white">
      <h1 className="text-[1.25rem] sm:text-[1.5rem]">
        <span className="text-gray-300 mr-2">02</span>MEET YOUR CREW
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div>
          <h2>{currentmember.role}</h2>
          <h1>{currentmember.name}</h1>
          <p>{currentmember.bio}</p>
          </div>
        <picture id="image-carousel" key={currentmember.name}>
          <source srcSet={currentmember.images.webp} alt={currentmember.name} />
          <img src={currentmember.images.webp} alt={currentmember.name} />
        </picture>
      </div>
      <ul className="flex gap-6">
        <li className="bg-white w-[1rem] aspect-square rounded-full"></li>
        <li className="bg-white w-[1rem] aspect-square rounded-full"></li>
        <li className="bg-white w-[1rem] aspect-square rounded-full"></li>
        <li className="bg-white w-[1rem] aspect-square rounded-full"></li>
      </ul>
    </section>
  );
};

export default Crew;
