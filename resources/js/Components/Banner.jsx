import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
    return (
        <>
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center w-full h-[80vh] px-20">
                        <h2 className="text-7xl">
                            "Breathe easy, live better protecting your lungs
                            today is the key to a healthier tomorrow."
                        </h2>
                        <div className="h-60 w-80">
                            <img
                                src="https://img.freepik.com/free-vector/breathing-exercise-concept-illustration_114360-9702.jpg?t=st=1731748853~exp=1731752453~hmac=3b378134ee7672e3ba39f6822cf459e02d4eac164eace01d3ad6341318b997a2&w=826"
                                alt=""
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center w-full h-[80vh] px-20">
                        <h2 className="text-7xl">
                            "Early detection of lung cancer can make a huge
                            difference. Understand the symptoms and take action
                            today for a healthier tomorrow."
                        </h2>
                        <div className="h-60 w-80">
                            <img
                                src="https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-66139.jpg?t=st=1731749415~exp=1731753015~hmac=7d7300c401cae1781d4060361e4ee76410eeb03051beec0f6309cece5326a9dd&w=996"
                                alt=""
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center w-full h-[80vh] px-20">
                        <h2 className="text-7xl">
                            "From detection to treatment, every step is crucial
                            in the fight against lung cancer. Take control of
                            your health today."
                        </h2>
                        <div className="h-60 w-80">
                            <img
                                src="https://img.freepik.com/free-vector/woman-with-injured-broken-leg-plaster-cast-sitting-doctor-office-taking-x-ray-crutch-vector-illustration-trauma-hospital-treatment-physiotherapy-concept_74855-10198.jpg?t=st=1731749459~exp=1731753059~hmac=f1d9e5b9dd0b85d7bda9581ec2e404740a0470dd0d75990f8ab2ff398225eee3&w=1380"
                                alt=""
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
