import React from "react";
import profilephoto from "../assets/profilephoto.jpg";
import webbackground from "../assets/webbg.png";

const Hero = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-[url('src/assets/webbg.png')]">
            <div className="flex items-center">
                <img src={profilephoto} alt="profile photo" className="mr-20 h-72 hero-img" />
                <div className="flex flex-col text-align h-72 justify-end">
                    <div className="">
                        <div className="text-5xl"><span className="hello-font font-heading-special">Hi, I'm </span><span className="font-medium">Isaac Donnelson</span></div>
                        <div className="about-me">I am a software engineer, based in <span className="city">Seattle, WA<div className="highlight-underline" ></div></span></div>
                    </div>
                    <div className="mt-8">
                    <button className="hero-button secondary-button">Get In Touch</button>
                    <button className="hero-button primary-button">Portfolio</button>
                    </div>
                    <div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;