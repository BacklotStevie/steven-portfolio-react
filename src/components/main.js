import React from 'react';
import backlot from '../images/backlot.png'
import trigan from '../images/trigan.png'
import teramana from '../images/teramana.png'
import fdot from '../images/fdot.png'

const Main = () => {
    return (
    <>
        <div class='bg-red-200 h-screen'>
            <div class='flex-col pt-14 float-left ml-80 mt-36'>
                <div>
                    <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Your Brand's</h1>
                </div>
                <div>
                    <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Best Friend</h1>
                </div>
            </div>

            <div class='flex float-right mt-72 mr-64 w-half'>
                <span class='text-indigo-900 text-base'>Everyone has a dream. Goals, aspirations, passions.</span>
            </div>
            <div class='flex float-right mt-10 mr-64 w-half'>
                <span class='text-indigo-900 text-base'>Mine is to help bring yours to life. Let's create something great, together.</span>
            </div>
        </div>

        <div class='bg-red-200'>
            <div class='pt-25'>
                <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Featured Work</h1>
            </div>

            <div class="bg-red-200 py-6 flex flex-col justify-center mx-auto sm:py-12">
                <div class="h-auto py-10 px-10 w-2/3 bg-indigo-900 space-y-5 mx-auto rounded-xl shadow-xl hover:rotate-1 transition-transform">
                    <div>
                        <h1 class='text-center text-xl pb-10 text-red-200 underline'><a href="http://insidebacklot.com">Inside the Backlot</a></h1>
                    </div>
                    <div class='flex justify-between grid-cols-2'>
                        <h2 class="cols-span-12 font-normal tracking-wide text-xl text-red-200 lg:w-2/5">Inside the Backlot a film podcasting, blogging and social networking community. Created by myself and developed alongside Ariel Elazarov, Inside the Backlot is a full-stack web application created with React.js, Node.js and Bootstrap, with fully functional backend routing.</h2>
                        <img src={backlot} alt="..." class="cols-span-12 max-h-80 w-1/2 border-none mt-3 pl-5"></img>
                    </div>
                </div>
            </div>

            <div class="bg-red-200 py-6 flex flex-col justify-center mx-auto sm:py-12">
                <div class="h-auto py-10 px-10 w-2/3 bg-indigo-900 space-y-5 mx-auto rounded-xl shadow-xl hover:rotate-1 transition-transform">
                    <div>
                        <h1 class='text-center text-xl pb-10 text-red-200 underline'><a href='https://triganvisuals.netlify.app/'>TRI-GAN Visuals</a></h1>
                    </div>
                    <div class='flex justify-between grid-cols-2'>
                        <h2 class="cols-span-12 font-normal tracking-wide text-xl text-red-200 lg:w-2/5">TRI-Gan Videos is a Miami-based videographer, editor and creative consultant. Their portfolio site was created using React.js, Gatsby.js and TailwindCSS.</h2>
                        <img src={trigan} alt="..." class="cols-span-12 max-h-80 w-1/2 border-none mt-3 pl-5"></img>
                    </div>
                </div>
            </div>

            <div class="bg-red-200 py-6 flex flex-col justify-center mx-auto sm:py-12">
                <div class="h-auto py-10 px-10 w-2/3 bg-indigo-900 space-y-5 mx-auto rounded-xl shadow-xl hover:rotate-1 transition-transform">
                    <div>
                        <h1 class='text-center text-xl pb-10 text-red-200 underline'><a href='https://toningwithteremanatequila.netlify.app/'>Toning With Teramana Tequila</a></h1>
                    </div>
                    <div class='flex justify-between grid-cols-2'>
                        <h2 class="cols-span-12 font-normal tracking-wide text-xl text-red-200 lg:w-2/5">One of my projects while at Ironhack, Toning With Teramana Tequila was a group React.js project inspired by Dwayne 'The Rock' Johnson's new brand of tequila, Teramana Tequila. This project was done in conjecture with a UX group, giving us real-world experience in working with a UX/UI team.</h2>
                        <img src={teramana} alt="..." class="cols-span-12 max-h-80 w-1/2 border-none mt-3 pl-5"></img>
                    </div>
                </div>
            </div>

            <div class="bg-red-200 py-6 flex flex-col justify-center mx-auto sm:py-12">
                <div class="h-auto py-10 px-10 w-2/3 bg-indigo-900 space-y-5 mx-auto rounded-xl shadow-xl hover:rotate-1 transition-transform">
                    <div>
                        <h1 class='text-center text-xl pb-10 text-red-200 underline'><a href='https://docs.google.com/document/d/1Rtal_F7Oi2Ht1sH9xraZwRsr3YHbg0CJ/edit?usp=sharing&ouid=111097312435884888160&rtpof=true&sd=true'>Don't Let Your Distraction Drive You - FDOT</a></h1>
                    </div>
                    <div class='flex justify-between grid-cols-2'>
                        <h2 class="cols-span-12 font-normal tracking-wide text-xl text-red-200 lg:w-2/5">'Don't Let Your Distraction Drive You' is an advertisement and marketing campaing developed by a group of students for the Florida Department of Transportation. Our goal was to reach our target audience (college students) with a relevant and consice marketing campaign to instill better driving practices within the community.</h2>
                        <img src={fdot} alt="..." class="cols-span-12 max-h-80 w-1/2 border-none mt-3 pl-5"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Main