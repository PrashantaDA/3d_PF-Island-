import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link
      to={link}
      className='neo-brutalism-white neo-btn'>
      <img
        src={arrow}
        className='w-4 h-4 object-contain'
      />
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Prashanta</span>👋
      <br />A Software Engineer from Nepal.
    </h1>
  ),
  2: (
    <InfoBox
      text='Worked with various companies and picked up many skills along the way'
      link='/about'
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox
      text='Created multiple projects for skill enhancement. Curious about the projects?'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev? I'm just a few keystrokes away"
      link='/contact'
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
