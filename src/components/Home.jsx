import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Yunus Emre Taşçı
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm frontend developer Especially interested in the Front end/Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime student. 
        </p>
        <div>
          <Link to="work" className='text-white group border-2 w-40 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
