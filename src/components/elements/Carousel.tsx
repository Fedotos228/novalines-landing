'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { gallerySlides } from '@/constants/data';
import Image from 'next/image';

// TODO: Create carousel

export default function Carousel() {
    return (
        <Swiper spaceBetween={20} slidesPerView={1}>
            {gallerySlides.map((slide, index) => (
                <SwiperSlide key={slide.image}>
                    <Image width={300} height={300} src={slide.image} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
