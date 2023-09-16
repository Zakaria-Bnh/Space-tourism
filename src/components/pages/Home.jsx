



const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:mt-44">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start mb-[6rem] lg:mb-0 text-white">
        <p className="text-[1.25rem]">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="text-[7.75rem] md:text-[8.5rem] lg:[3rem]">SPACE</h1>
        <p className="text-[1.25rem] text-center max-w-[520px] lg:text-start">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div className=" flex-1 flex justify-center lg:justify-end items-center lg:items-end lg:mr-12 lg:mb-4rem">
        <div className="bg-white rounded-[100%] text-[2rem] lg:text-[2.5rem] p-6 lg:p-8 aspect-square flex justify-center items-center text-">
          <a href="#">EXPLORE</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
