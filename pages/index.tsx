import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Teacher from '../components/Teacher';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-800" style={{ height: '45em', marginTop: '-5%' }}>
        <div style={{ width: '50%', paddingLeft: '10%', paddingTop: '12%' }}>
          <h1 className="text-white font-medium text-6xl">
            Find the Best Tutors for Classes You Need Help In Most
          </h1>
          <p className="text-gray-300 font-light text-2xl mt-5">
            I love black people
          </p>
          <div style={{ marginLeft: '120%', marginTop: '-40%' }}>
            <Teacher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
