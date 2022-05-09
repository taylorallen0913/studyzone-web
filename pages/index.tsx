import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import DigitalTeacherGraphic from '../components/DigitalTeacherGraphic';

const Home: NextPage = () => {
  return (
    <div style={{ marginBottom: '20em' }}>
      <div className="w-screen bg-blue-800 pb-20">
        <div className="container mx-auto">
          <div className="w-screen">
            <Navbar />
          </div>
          <div className="grid grid-cols-2 pt-40">
            <div className="pl-10 mt-10">
              <h1 className="font-Inter text-white font-semibold text-6xl">
                Find the Best Tutors for Classes You Need Help In Most
              </h1>
              <p className="font-Karla text-gray-300 text-2xl my-4">
                I love black people
              </p>
              <button className="bg-blue-secondary rounded-full text-white py-3 px-6 my-5">
                Get Started
              </button>
            </div>
            <div className="ml-40">
              <DigitalTeacherGraphic />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-40 font-Inter text-center font-semibold text-slate-700 text-6xl">
          How Does Studyzone Work?
        </h1>
        <div className="flex flex-row mt-15 justify-center items-center">
          <div className="mx-5 basis-1/4 text-center">
            <i className="bi bi-search text-blue-800 text-6xl" />
            <h3 className="text-blue-secondary font-Inter font-medium text-2xl mt-10">
              Search for a Tutor That Matches Your Needs
            </h3>
            <p className="font-Karla text-slate-700 text-2xl my-4">
              Hello world
            </p>
          </div>
          <div className="mx-5 basis-1/4 text-center">
            <i className="bi bi-pencil text-blue-800 text-6xl" />
            <h3 className="text-blue-secondary font-Inter font-medium text-2xl mt-10">
              Start Meeting and Studying With Your Tutor
            </h3>
            <p className="font-Karla text-slate-700 text-2xl my-4">
              Hello world
            </p>
          </div>
          <div className="mx-5 basis-1/4 text-center">
            <div>
              <i className="bi bi-graph-up-arrow text-blue-800 text-6xl" />
              {/* <GraduationGraphic /> */}
              <h3 className="text-blue-secondary font-Inter font-medium text-2xl mt-10">
                See Huge Improvements in Your Academic Perfomance
              </h3>
              <p className="font-Karla text-slate-700 text-2xl my-4">
                Hello world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
