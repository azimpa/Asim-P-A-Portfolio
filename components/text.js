// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "ZIRA",
          path: "/voxy.png",
          git: "https://github.com/azimpa/Zira.git",
          live: "https://master.d3grfrlmr8mhoe.amplifyapp.com/",
        },
        {
          title: "RIDE WITH ME",
          path: "/backpackerz.png",
          git: "https://github.com/azimpa/RWMProject.git",
          live: "https://master.d3grfrlmr8mhoe.amplifyapp.com/",
        },
        {
          title: "NETFLIX CLONE",
          path: "/ansil.png",
          git: "https://github.com/azimpa/React-Netflix.git",
          live: "https://react-netflix-lime-chi.vercel.app/",
        },
        {
          title: "OLX CLONE",
          path: "/thumb3.jpg",
          git: "https://github.com/azimpa/React-Olx.git",
        },
      ],
    },
    {
      images: [
        {
          title: "TODO",
          path: "/todo.png",
          git: "https://github.com/azimpa/Todo.git",
        },
        {
          title: "PAPPAD",
          path: "/adidas.png",
          git: "https://github.com/azimpa/Pappad.git",
          live: "https://pappad.vercel.app/",
        },
        {
          title: "PORTFOLIO",
          path: "/thumb4.jpg",
          git: "https://github.com/azimpa/Portfolio.git",
        },
      ],
    },
  ],
};

import Image from "next/image";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
import { TbBrandGithub, TbLivePhoto } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={index}
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  <Image src={image.path} alt="" width={500} height={300} />
                  <div
                    className="absolute inset-0 bg-gradient-to-l 
                  from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                  group-hover:opacity-80 transition-opacity duration-700"
                  ></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <TbBrandGithub />
                      <Link
                        href={image.git}
                        className="group-hover:translate-y-0 transition-transform duration-300 delay-150"
                      >
                        {image.title}
                      </Link>
                      <BsArrowRight className="text-xl group-hover:translate-y-0 transition-transform duration-300 delay-200" />
                    </div>
                    {image.live && (
                      <div className="flex flex-col sm:flex-row items-center gap-x-2 text-[13px] tracking-[0.2em] mt-2 sm:mt-0">
                        <TbLivePhoto />
                        <Link
                          href={image.live}
                          className="group-hover:translate-y-0 transition-transform duration-300 delay-100"
                        >
                          Live
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
