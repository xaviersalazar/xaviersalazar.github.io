import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOpenOutline,
} from "react-icons/io5";
import Skills from "./Skills";

const App = () => (
  <div className="w-full mx-auto mt-8 mb-0 text-center">
    <h1 className="text-4xl md:text-7xl font-black">I am</h1>
    <h1 className="text-7xl md:text-9xl font-black bg-clip-text text-fill-transparent bg-gradient-to-r from-[#ee0979] to-[#ff6a00]">
      Xavier Salazar
    </h1>
    <div className="p-8" id="dev-card-container">
      <div
        className="flex flex-col h-[540px] max-w-[508px] shadow-3xl rounded-2xl mx-auto my-0 px-6 py-4 text-left relative overflow-hidden"
        id="dev-card"
      >
        <h1 className="text-2xl font-bold">Software Engineer</h1>
        <p className="text-md font-extraLight">Full-stack | Front-end</p>
        <p className="text-md font-extraLight">Currently at Method</p>
        <div className="pic-container opacity-75 rounded-full absolute bottom-[-3rem] right-[-3.5rem] z-10">
          <img
            className="gradient-border"
            width={320}
            src="/pic.jpg"
            alt="selfie"
          />
        </div>
        <Skills />
        <div className="flex gap-2 mt-auto z-50">
          <IoLogoGithub className="text-2xl" />
          <IoLogoLinkedin className="text-2xl" />
          <IoMailOpenOutline className="text-2xl" />
        </div>
      </div>
    </div>
  </div>
);

export default App;
