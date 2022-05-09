import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Teacher from '../components/Teacher';

const Home: NextPage = () => {
  return (
    <div className="w-screen bg-blue-800 pb-20">
      <div className="container mx-auto">
        <div className="w-screen absolute">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 pt-44 ">
          <div className="pl-5">
            <h1 className="text-white font-medium text-6xl">
              Find the Best Tutors for Classes You Need Help In Most
            </h1>
            <p className="text-gray-300 font-light text-2xl mt-5">
              I love black people
            </p>
          </div>
          <div className="ml-40">
            <Teacher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
