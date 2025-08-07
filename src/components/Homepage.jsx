import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Marquee from "react-fast-marquee";

const Homepage = () => {
  return (
    <section>
      <div className="bg-[#F0F8FF] h-screen px-10 font-space">
        <div className="flex justify-center items-center ">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold pb-15">
              Secure <span className="text-[#28D08A]">business</span> <br />
              with Techty security.
            </h1>
            <p className="pb-8 w-[80%]">
              We have considered our solutions to support every stage of your
              growth. We are the fastest and easiest way to launch an attractive
              and feature-complete SaaS showcase.
            </p>

            <div className="flex gap-6">
              <Button />
              <button className="px-6 py-2 bg-[#28D08A] hover:bg-black text-[#ffffff] text-l font-normal   rounded-md">
                Hire an Expert
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center  rounded-md bg-white">
              <img
                src="/images/heroSc.png"
                alt=""
                className="rounded-md w-[860px]"
              />
            </div>
            <div className="flex justify-center gap-3 py-7">
              <h3 className="font-semibold text-l">Trustpilot</h3>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 w-[90%] my-5" />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl">Thousands of businesses use Techty</p>
          </div>
          <div>
            <marquee behavior="scroll" direction="left">
              <img src="/images/marquee.png" alt="" />
            </marquee>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-10 my-15 bg-[#ffffff]">
        <div>
          <h1 className="text-3xl font-semibold items-center justify-center">
            Empower your business <br /> with cutting-edge
            <span className="text-[#28D08A]"> solutions. </span>
          </h1>
        </div>

        <div className="flex justify-center items-start gap-5 my-10">
          <div className="flex justify-center gap-5 cursor-pointer">
            <div className="text-[#28D08A] text-6xl font-semibold h-[73px]">
              01
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
              <p className="text-[#4E4E4E]">
                Creating or improving products to meet our user needs.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 cursor-pointer">
            <div className="text-6xl font-semibold h-[73px]">02</div>
            <div className="flex flex-col items-start">
              <h3 className="text-[#171A1F] font-semibold">Data Analysis</h3>
              <p className="text-[#4E4E4E]">
                Creating or improving products to meet our user needs.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 cursor-pointer">
            <div className="text-6xl font-semibold h-[73px]">03</div>
            <div className="flex flex-col items-start">
              <h3 className="text-[#171A1F] font-semibold">Analyze Product</h3>
              <p className="text-[#4E4E4E]">
                Creating or improving products to meet our user needs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center my-10 w-full">
          <div>
            <img src="/images/aboutSc.png" alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-[#171A1F] font-semibold">Collect Ideas</h3>
            <p className="text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
            <ul className="list-disc">
              <li>We collect ideas from different design inspirations,</li>
              <li>Analysis data for any kind of corrections.</li>
              <li>Finalize the product for the production to be done.</li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
