"use client";
import Image from "next/image"
import React from 'react'
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book, or rent a car — quickly and easily
            </h1>
            <p className="hero__subtitle">
                Search and find cars with ease and simplicity using our website at the palm of your hands
            </p>

            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue mt-10 text-white rounded-full"
            handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
                
            </div>
            <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero