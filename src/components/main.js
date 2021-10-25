import React from 'react';
import backlot from '../images/backlot.png'

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

        <div class='bg-red-200 h-screen'>
            <div class='pt-25'>
                <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Featured Work</h1>
            </div>

            <div class="bg-red-200 py-6 flex flex-col justify-center mx-auto sm:py-12">
                <div class="">
                    <h1 class='text-xl pb-4 text-indigo-900'>Inside the Backlot</h1>
                    <div class="flex justify-between grid-cols-2 h-auto py-20 px-10 w-2/3 bg-indigo-900 space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
                        <h2 class="cols-span-12 font-normal tracking-wide text-xl text-white lg:w-2/5">Inside the Backlot a film podcasting, blogging and social networking community. Created by myself and developed alongside Ariel Elazarov, Inside the Backlot is a full-stack web application created with React.js, Node.js and Bootstrap, with fully functional backend routing.</h2>
                        <img src={backlot} alt="..." class="cols-span-12 max-h-80 w-1/2 border-none mt-3 pl-5"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Main