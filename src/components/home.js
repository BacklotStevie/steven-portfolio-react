import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div class='bg-red-200 h-screen'>
            <div>
                <div>
                    <h1 class='text-indigo-900 text-9xl pt-20 pr-60 mr-50'>Steven</h1>
                </div>
                <div class=''>
                    <h1 class='text-indigo-900 text-9xl pl-60 ml-50'>Sarria</h1>
                </div>
                <div>
                    <h3 class='text-indigo-900 pt-10 italic'>Developing your visions. Creating your dreams.</h3>
                </div>
                <div class='pt-10'>
                    <Link to='main' href='#main'>
                        <button class="bg-red-200 hover:bg-indigo-900 text-indigo-900 hover:text-white font-bold py-2 px-4 rounded-full">
                            Enter
                        </button>
                    </Link>
                </div>
            </div>
        </div> 
    );
};

export default Home