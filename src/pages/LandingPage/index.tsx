import React from "react";
import { HeaderMenu } from "../../components";
import { AppleStoreImg, GooglePlayImg, pict1, pict2 } from "../../assets";
import CarouselComponent from "./Carousel";
import {
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const LandingPage: React.FC = () => {
  return (
    <div className="h-full">
      <HeaderMenu />
      <div className="h-[55rem]">
        <div className="flex h-full justify-between px-72 py-16">
          <div className="flex h-full w-[50rem] flex-col justify-between">
            <p className="mt-1 text-[7rem] font-semibold leading-[7rem] tracking-wider">
              Choose your
              <br />
              Coffee & <br /> Space
            </p>

            <p className="text-xl tracking-widest">
              IMAJI Coffee has been serving 20,000+ cups of coffee and providing
              <br />a comfortable place for our customers to work since 2010.
            </p>

            <img src={pict1} alt="" className="h-80 w-full object-cover" />
          </div>
          <div className="ml-1 h-full w-[30rem]">
            <img src={pict1} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="bg-soft-peach px-72 py-14">
          <p className="mb-10 text-[6rem] font-semibold leading-[8rem]">
            We provide your space for <br /> your work or mini event <br /> with
            your favorite coffee.
          </p>
          <div className="mb-10 flex">
            <p className="w-[40%] text-xl font-medium">
              Our story begins in 2010 with a simple idea from our <br />
              founder that the most comfortable place to work is <br />
              anywhere, because ideas are not limited by space <br /> and time,
              and the most comfortable place is in a <br /> cafe where their
              favorite coffee is available
            </p>
            <p className="ml-20 w-[40%] text-xl font-medium">
              All the best local coffee bean varieties from <br /> throughout
              Indonesia are available with us. Directly <br /> from selected
              farmers, high-quality beans are <br /> processed and roasted to
              perfection by ourselves, <br /> then passed on to our skilled
              baristas who are <br />
              passionate about preparing a cup of longed-for <br /> happiness
              from home.
            </p>
          </div>

          <div className="-mx-44 flex justify-between">
            <img src={pict1} alt="" className="h-96 w-96 object-cover" />
            <img src={pict1} alt="" className="mt-44 h-96 w-96 object-cover" />
            <img src={pict1} alt="" className="h-96 w-96 object-cover" />
            <img src={pict1} alt="" className="mt-44 h-96 w-96 object-cover" />
          </div>
        </div>

        <div className="my-20 px-72">
          <div className="flex items-center justify-between pb-16">
            <p className="text-7xl font-semibold tracking-wider">
              Find your favorite menu
            </p>
            <div className="flex h-12 w-48 items-center justify-center bg-tawny-brown font-bold text-white">
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
                  <p className="pt-1 text-grey">
                    Available only at cafe and delivery
                  </p>
                  <p className="text-lg font-bold">Rp. 50.000</p>
                  <p className="text-tawny-brown">Get 10% off in app</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full bg-soft-peach py-10">
          <div className="px-72 py-10">
            <p className="pb-10 text-7xl font-semibold tracking-wider">
              8 Comfy workspace
            </p>
            <p className="text-xl">
              We provide many attractive and unique <br /> workspaces so you
              will have no trouble finding <br />
              the workspace you want.
            </p>
          </div>

          <CarouselComponent />
        </div>

        <div className="px-72 py-20">
          <p className="text-7xl font-semibold leading-[5rem] tracking-wide">
            We grow together with <br /> our customer
          </p>
          <div className="mt-12 flex">
            <div className="flex w-1/3 flex-col justify-between">
              <p className="text-2xl">
                We believe that we are big not <br /> because of us but because
                of them. <br /> they are the ones who motivate us to <br />{" "}
                continue to innovate to provide to a <br />
                quality coffee taste and comfortable <br /> space that is
                getting better every <br /> day
              </p>
              <div className="mb-28 flex h-14 w-60 items-center justify-center bg-tawny-brown">
                <p className="font-bold text-white">Explore other event</p>
              </div>
            </div>
            <div className="relative h-[35rem] bg-slate-800">
              <img src={pict2} alt="" className="h-full object-cover" />
              <div className="absolute bottom-0 left-0 flex h-16 w-56 flex-col items-center justify-center bg-white">
                <p className="font-bold text-jet-black">LATTE ART WORKSHOP</p>
                <p className="text-tawny-brown">20 Feb 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-soft-peach px-72 py-10">
          <p className="text-7xl font-semibold">Latest News</p>
          <div className="flex justify-between pt-5">
            <p className="text-xl">
              Get the latest updates and deeper coffee <br /> experience from
              IMAJI Coffee
            </p>
            <div className="flex h-14 w-40 items-center justify-center bg-tawny-brown">
              <p className="text-xl font-semibold text-white">See all news</p>
            </div>
          </div>
          <div className="pt-10">
            <img src={pict1} alt="" className="h-[28rem] w-full object-cover" />
            <p className="pt-2 text-2xl">
              Collaboration to develop coffee and beverage industry expertise in
              Indonesia.
            </p>
            <p className="pt-1 text-grey">4 Min • August 19, 2024</p>
          </div>
        </div>

        <div className="w-full bg-jet-black px-72 py-10">
          <div className="flex flex-col items-center py-5">
            <p className="text-8xl text-white">Our Location</p>
            <p className="pt-5 text-xl text-white">
              Jl. Bangkringan No 19, RT 11/RW 12, Kota Surabaya, 60142
            </p>
            <p className="pt-1 text-xl text-white">
              Customer Service +62 8123 1234
            </p>
            <p className="pt-1 text-xl text-white">
              We are open from Sun - Mon 10 AM - 22 PM
            </p>
          </div>
          <hr className="border-2 border-solid bg-white" />
          <div className="flex justify-between pt-2">
            <div className="flex w-1/5 items-center justify-around">
              <BsInstagram fill="white" size={35} />
              <BsTiktok fill="white" size={35} />
              <BsYoutube fill="white" size={35} />
              <BsTwitter fill="white" size={35} />
              <BsTelegram fill="white" size={35} />
            </div>
            <div className="flex w-1/3 items-center justify-between">
              <p className="text-2xl font-medium text-white">Delivery Order</p>
              <img src={AppleStoreImg} className="h-14 object-cover" />
              <img src={GooglePlayImg} className="h-20 object-cover" />
            </div>
          </div>
          <div className="flex justify-between pt-24">
            <div>
              <p className="text-xl text-tawny-brown">
                © 2023 IMAJI COFFEE, All rights reserved
              </p>
            </div>
            <div>
              <p className="text-xl text-tawny-brown">
                Terms and conditions | Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
