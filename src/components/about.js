import React from 'react';
import Steven from '../images/steven.jpg'


const About = () => {
    return (
    <>
        <div>
         <div class='bg-red-200 flex flex-col place-content-center pt-20'>
            <div>
                <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Steven Sarria</h1>
            </div>
            <div>
                <h3 class='text-indigo-900 text-3xl italic tracking-tight'>Inspiring Creativity</h3>
            </div>
            <img src={Steven} alt="..." class="self-center object-contain h-68 w-96 pt-10"></img>
         </div>
        </div>

        <div class="bg-red-200 pt-5">
            <h1 class='m-10  text-lg text-indigo-900'>From writing comic books in elementary school to film reviews in college, I have always had a passion for storytelling through various mediums. Creative through words and expression, I always tried to find different ways to tell tales, to solve problems and create ideas. Once I started designing, I realized that a whole new opportunity had presented itself to me. The opportunity to not only create my own vision of designs, websites or articles - but to help bring those to life for others.</h1>
            <h1 class='m-10  text-lg text-indigo-900'>With a Bachelor's degree in Public Relations from Florida International University, and a coding background from Ironhack Miami, I look to merge my design skills with my expertise in writing, in an attempt to create the best product possible for myself, and for clients. A driven, passionate individual, I live to help bring other's dreams and ideas to life.</h1>
            <h1 class='pb-15  text-lg text-indigo-900'>Everyone has an idea, and with that idea, a story. Let's get yours out there, together.</h1>
        </div>
    </>
    );
};

export default About