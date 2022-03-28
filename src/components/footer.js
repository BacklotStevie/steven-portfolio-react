import React from 'react';

const Footer = ({  }) => {
    return (
     <>
        <footer class="p-4 bg-red-200 md:flex md:items-center md:justify-between md:p-6 ">
            <a href="/main" class="text-m text-indigo-900 sm:text-center dark:text-gray-400"> Steven Sarria
            </a>
        <ul class="flex flex-wrap items-center mt-3 text-m text-indigo-900 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="http://www.linkedin.com/in/stevensarria1996" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
            </li>
            <li>
                <a href="https://docs.google.com/document/d/1cOa3AEHMLL4jzGMNZ6LkonB92edaxRcw3Ra_LSKNNjs/edit?usp=sharing" class="mr-4 hover:underline md:mr-6">Resume</a>
            </li>
        </ul>
        </footer>
     </>
    )
  }
  
  export default Footer
  