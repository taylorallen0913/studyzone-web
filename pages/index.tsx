import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-blue-800"
        style={{ height: '40em', marginTop: '-100px' }}
      />
      <div style={{ width: '50%', paddingLeft: '10%' }}>
        <h1 className="text-white text-5xl" style={{ marginTop: '-10em' }}>
          Find the best tutors for classes you need help in
        </h1>
        <p className="text-gray-300 text-2xl mt-5">
          Find the best tutors for classes you need help in
        </p>
      </div>
    </div>
  );
};

export default Home;
