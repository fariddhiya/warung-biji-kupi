import React from "react";
import { HeaderMenu } from "../../components";
import { pict1 } from "../../assets";
import Slider from "../../components/Slider";

const LandingPage: React.FC = () => {
  return (
    <div className="h-full">
      <HeaderMenu />
      <div className="h-[55rem]">
        <div className="flex px-72  h-full bg-red-400 py-16 justify-between">
          <div className="w-[50rem] h-full flex flex-col justify-between bg-purple-500">
            <p className="text-[7rem] font-semibold mt-1 leading-[7rem] tracking-wider">
              Choose your
              <br />
              Coffee & <br /> Space
            </p>

            <p className="text-xl tracking-widest">
              IMAJI Coffee has been serving 20,000+ cups of coffee and providing
              <br />a comfortable place for our customers to work since 2010.
            </p>

            <img src={pict1} alt="" className="h-80 object-cover w-full" />
          </div>
          <div className="w-[30rem] h-full ml-1">
            <img src={pict1} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="px-72 bg-soft-peach py-14">
          <p className="text-[6rem] mb-10 font-[500] tracking-wider">
            We provide your space for <br /> your work or mini event <br /> with
            your favorite coffee.
          </p>
          <div className="flex mb-10">
            <p className="w-[40%] font-medium text-xl">
              Our story begins in 2010 with a simple idea from our founder that
              the most comfortable place to work is anywhere, because ideas are
              not limited by space and time, and the most comfortable place is
              in a cafe where their favorite coffee is available
            </p>
            <p className="w-[40%] ml-20 font-medium text-xl">
              All the best local coffee bean varieties from throughout Indonesia
              are available with us. Directly from selected farmers,
              high-quality beans are processed and roasted to perfection by
              ourselves, then passed on to our skilled baristas who are
              passionate about preparing a cup of longed-for happiness from
              home.
            </p>
          </div>

          <div className="flex -mx-44 justify-between">
            <img src={pict1} alt="" className="h-96 w-96 object-cover" />
            <img src={pict1} alt="" className="h-96 mt-44 w-96 object-cover" />
            <img src={pict1} alt="" className="h-96 w-96 object-cover" />
            <img src={pict1} alt="" className="h-96 mt-44 w-96 object-cover" />
          </div>
        </div>

        <div className="px-72 my-20">
          <div className="flex bg-red-200 justify-between items-center pb-16">
            <p className="text-7xl font-semibold tracking-wider">
              Find your favorite menu
            </p>
            <div className="w-48 h-12 bg-tawny-brown flex items-center justify-center text-white font-bold">
              Explore other menu
            </div>
          </div>
          <div className="flex justify-around">
            {Array.from({ length: 3 }).map(() => {
              return (
                <div className="w-[30%]">
                  <img
                    src={pict1}
                    alt=""
                    className="h-96 w-full object-cover"
                  />
                  <p className="pt-1">RISTRETTO BIANCO</p>
                  <p className="text-grey pt-1">
                    Available only at cafe and delivery
                  </p>
                  <p className="font-bold text-lg">Rp. 50.000</p>
                  <p className="text-tawny-brown">Get 10% off in app</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-soft-peach w-full py-10">
          <div className="px-72 py-10">
            <p className="text-7xl pb-10 font-medium tracking-wider">
              8 Comfy workspace
            </p>
            <p className="text-xl">
              We provide many attractive and unique <br /> workspaces so you
              will have no trouble finding <br />
              the workspace you want.
            </p>
          </div>
          <div className="flex justify-around">
            {Array.from({ length: 4 }).map(() => {
              return (
                <div className="">
                  <div className="absolute bg-white w-32 h-16 flex items-center justify-center flex-col">
                    <div>
                      <p className="font-bold">WHITE HALL</p>
                      <p className="text-sm text-tawny-brown font-bold">
                        Workspace
                      </p>
                    </div>
                  </div>
                  <img
                    src={pict1}
                    alt=""
                    className="w-96 h-[30rem] object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {Slider()}
      </div>
    </div>
  );
};

export default LandingPage;
