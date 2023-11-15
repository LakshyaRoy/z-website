import SoundBox from "../../assets/soundbox.jpg";
import { Slide, Fade } from "react-awesome-reveal";
import {
  MusicalNoteIcon,
  CloudIcon,
  WifiIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src={SoundBox}
        alt="SoundBox Image"
        className="w-full absolute z-0 object-cover "
      />
      <div className="absolute z-10 flex justify-center flex-col items-start gap-4 left-[10%] top-1/2 transform  translate-y-[105%] xl:translate-y-[95%] lg:translate-y-[30%] md:translate-y-[20%] ">
        <div className="flex justify-center flex-col items-start gap-5 ">
          <Fade delay={100} right cascade>
            <p
              className="text-[#FF7E0D] text-[1.8rem] tracking-tight font-HelveticaNowMTTextBold lg:text-[2.4rem] xl:text-[3rem]"
              style={{
                "-webkit-text-stroke": "0.5px #000000 ",
              }}
            >
              SELECT MODELS
            </p>
          </Fade>
          <Fade cascade delay={200} right>
            <p className="text-[whitesmoke] font-bold text-[3rem] w-[50%] leading-[2.5rem] font-HelveticaNowMTTextBold md:text-[2.5rem] xl:text-[3.2rem]">
              DISCOUNTS 50% OFF
            </p>
          </Fade>
          <Fade delay={300}>
            <p className=" text-[whitesmoke] text-sm font-HelveticaNowMTTextMedium">
              The End Of Winter Sale Is Here!{" "}
            </p>
          </Fade>
        </div>
        <Slide delay={100} duration={1000}>
          <div className=" border-2 px-4 py-2 border-r-[#FF7E0D] hover:border-[#FF7E0D] transition  delay-150 cursor-pointer">
            <button className=" text-[12px] text-[whitesmoke] font-HelveticaNowMTTextBold hover:  ">
              SHOP NOW
            </button>
          </div>
        </Slide>
      </div>

      <div className="absolute z-10 flex justify-center flex-col items-start gap-4 right-0 w-[25%]">
        <div className="flex justify-start items-center gap-4 bg-white bg-opacity-25 rounded-full px-4 w-[245px]  ">
          <div>
            <MusicalNoteIcon
              width={30}
              className=" bg-white  rounded-full p-1 "
            />
          </div>
          <p>
            Multi-room and whole <br /> home music
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 bg-white bg-opacity-25 rounded-full px-4 w-[245px]">
          <div>
            <CloudIcon width={30} className=" bg-white  rounded-full p-1 " />
          </div>
          <p>
            Supports Apple <br /> AirPlay 2
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 bg-white bg-opacity-25 rounded-full px-4 w-[245px]">
          <div>
            <WifiIcon width={30} className=" bg-white  rounded-full p-1 " />
          </div>
          <p>
            Wifi & Bluetooth <br /> connection
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 bg-white bg-opacity-25 rounded-full px-4 w-[245px]">
          <div>
            <HandRaisedIcon
              width={30}
              className=" bg-white  rounded-full p-1 "
            />
          </div>
          <p>
            14 Touch <br /> commands
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
