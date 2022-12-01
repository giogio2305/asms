import React from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import sl1 from '../assets/sli.jpg'
import sl2 from '../assets/slii.jpg'
import sl3 from '../assets/sliii.jpg'

export default function SliderComponent(a, b, c) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        className="object-cover object-top w-full h-[88vh]"
                        src={sl1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-cover object-top w-full h-[88vh]"
                        src={sl2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-cover object-top w-full h-[88vh]"
                        src={sl3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}