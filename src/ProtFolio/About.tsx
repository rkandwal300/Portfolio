import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
// import myPic from "./myPic.jpg";

const About = () => {
  const [hover, setHover] = useState(false);

  const handleHoverIn = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    setHover(false);
  };

  return (
    <div  id="About"  className="  h-fit w-full flex justify-start items-center   "  >
      <div className="w-full h-fit py-5  flex  flexwrap justify-center items-center  mb-0  px-[60px]   ">
        <div className="max-w-full justify-center items-center  w h-fit py-5">
          <div className=" flex  flex-row justify-start items-center  ">
            <div className="md:text-3xl text-[20px] flex justify-center items-center">
              <div className="textC  text-xl mr-5 "> 02.</div>
              <div
                style={{ color: "rgb(200,210,242)" }}
                className="text-gray-300 font-bold   "
              >
                {" "}
                About Me
              </div>{" "}
            </div>
            <div className="border-t-2 h-1 ml-5 w-[40%]  border-gray-300">
              {" "}
            </div>
          </div>
          <div className=" h-fit w-full flex md:justify-between  justify-center  items-center flex-wrap  lg:flex-nowrap    ">
       
            <div className=" mb-[30px] mr-[30px] ">
              <p style={{ color: "rgb(136,146,176)" }}
                className="text-[18px] font-[400] lg:text[20px]  leading-7  max-w-[545px] mb-[20px] mt-[50px]   "
              >
                Hello! My name is Rahul and I enjoy creating things that live on
                the internet. My interest in
                <span className="textC"> Web Development </span>
                started back in 2020 . I am persuing my B.tech (C.S.E) from Doon
                Group of Institutions
                <span className="textC">
                  {" "}
                  Uttrakhand Technical University .{" "}
                </span>
              </p>
              <div style={{ color: "rgb(136,146,176)", lineHeight: "27px" }}
                className="text-[18px] font-[400] lg:text[20px]  mt-5  max-w-[545px] mb-[20px]   "
              >
                Fast-forward to today, and I’ve had the privilege of getting
                guiduence under
                <span className="textC"> CodeYogi . </span>
                My main focus these days is advancing my skills to another level
                .
              </div>
              <div style={{ color: "rgb(136,146,176)", lineHeight: "27px" }}
                className="text-[18px] font-[400] lg:text[20px]  mt-5  max-w-[545px] mb-[20px]   "
              >
                I recently completed copleted my e-commerce Project with API
                Integration & React.
              </div>

              <div style={{ color: "rgb(136,146,176)", lineHeight: "23px" }}
                className="text-[18px] font-[400] lg:text[20px]    max-w-[545px] mb-[20px] mt-[50px]   "
              >
                <div className="mb-[30px]   ">
                  Here are a few technologies I’ve been working with recently:
                </div>
                <div className="flex justify-between">
                  <div className=" flex flex-col justify-start items-start text-sm">
                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className="  text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> JavaScript (ES6+) </span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> React</span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> Adobe Xd </span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> Laravel </span>
                    </div>

                    <div className="flex flex-row justify-center items-center  ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> PHP</span>
                    </div>
                    <div className="flex flex-row justify-center items-center  ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> MySql</span>
                    </div>
                  </div>

                  <div className=" flex flex-col justify-start items-start text-sm  ">
                    <div className="flex flex-row justify-center items-center mb-2">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> TypeScript </span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> J Query </span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> Node Js </span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> express Js </span>
                    </div>

                    <div className="flex flex-row justify-center items-center mb-2 ">
                      <div
                        style={{ color: "rgb(136,146,176)" }}
                        className=" text-green-400"
                      >
                        {" "}
                        <MdArrowRight />{" "}
                      </div>
                      <span> Bootstrap </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  className=" lg:ml-[50px] h-[300px] sm:mr-[50px]  w-fit  md:mt-0 mt-[50px]     "
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
              onTouchStart={handleHoverIn}
              onTouchEnd={handleHoverOut}
            >
              <div className="sm:h-[300px] h-[200px] w-[200px] aspect-square  sm:w-[300px]    ">
                <img
                  className={
                    " object-cover rounded-md h-full w-full relative z-10 " +
                    (hover ? " grayscale-0 " : "")
                  }
                  src="./images/myPic.jpg"
                  alt="myPic"
                  width="100%s"
                />
              </div>
              <div
                className={
                  " sm:h-[300px] sm:w-[300px] h-[200px] w-[200px] borderB  rounded-md relative left-8   sm:top-[-270px]   top-[-170px] z-0   " +
                  (hover ? "  left-5 top-[-185px]  sm:top-[-280px]  " : "")
                }
              ></div>
              <div
                className={
                  "max-w-[300px] aspect-square bg-[rgba(62,240,198,0.68)] relative sm:top-[-600px] top-[-400px] rounded-md z-40 " +
                  (hover ? " opacity-0" : "")
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
