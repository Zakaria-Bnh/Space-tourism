import { useEffect, useState } from "react";
import { data } from "../../data/data";

const Crew = () => {
  const crewdata = data.crew;

  const [memberindex, setmemberindex] = useState(0);
  const [StartX, setStartX] = useState(0);
  const [diff, setdiff] = useState(0);
  const [currentmember, setcurrentmember] = useState(crewdata[memberindex]);

  const handletouchstart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handletouchmove = (e) => {
    setdiff(e.touches[0].clientX - StartX)
    console.log(diff, "difference");
    const threshold = 70;
    const lastmemeber = crewdata.length - 1;
    const firstmember = 0;
  
    if (diff > threshold) {
      setmemberindex((prevIndex) =>
        prevIndex === lastmemeber ? firstmember : prevIndex + 1
      ); // Corrected closing parenthesis here
    } else if (diff < -threshold) {
      setmemberindex((prevIndex) =>
        prevIndex === firstmember ? lastmemeber : prevIndex - 1
      ); // Corrected closing parenthesis here
    } 

    setcurrentmember(crewdata[memberindex])
    console.log(memberindex, "this is the index we currently at");
    console.log(StartX, 'point of start')
  };
  const handletouchend = (e) => {
    setStartX(0);
    setdiff(0) 
  };

  useEffect(() => {
    console.log('the diff now is zero')
  },[diff])

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
        <picture
          id="image-carousel"
          key={currentmember.name}
          onTouchStart={handletouchstart}
          onTouchMove={handletouchmove}
          onTouchEnd={handletouchend}
        >
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
