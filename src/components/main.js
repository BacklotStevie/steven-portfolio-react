import React from 'react';

const Main = () => {
    return (
        <div class='bg-red-200 h-screen'>
            <div class='flex-col float-left ml-80 mt-36'>
                <div>
                    <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Your Brand's</h1>
                </div>
                <div>
                    <h1 class='text-indigo-900 text-6xl italic tracking-tight'>Best Friend</h1>
                </div>
            </div>

            <div class='flex float-right mt-60 mr-64 w-half'>
                <span class='text-indigo-900 text-base'>Everyone has a dream. Goals, aspirations, passions.</span>
            </div>
            <div class='flex float-right mt-10 mr-64 w-half'>
                <span class='text-indigo-900 text-base'>Mine is to help bring yours to life. Let's create something great, together.</span>
            </div>
        </div>
    )
}

export default Main