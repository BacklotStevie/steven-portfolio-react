import React from 'react';

const Header = ({ siteTitle }) => {
    return (
      <>
        <nav class="justify-between flex-wrap bg-red-200 p-5">
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-between">
            <div class="text-lg text-indigo-900 pl-5 text-center hover:underline"><a href="/main">
              SS </a>
            </div>
            <div>
                <div class="text-lg float-right text-indigo-900 pr-5 pl-5 text-center hover:underline"><a href="/about">
                  About </a>
                </div>
                <div class="text-lg float-right text-indigo-900 pl-5 pr-5 text-center hover:underline"><a href="/work">
                  Work</a>
                </div>
                <div class="text-lg float-right text-indigo-900 pl-5 pr-5 text-center hover:underline"><a href='https://docs.google.com/document/d/1cOa3AEHMLL4jzGMNZ6LkonB92edaxRcw3Ra_LSKNNjs/edit?usp=sharing'>
                  Resume</a>
                </div>
              </div>
          </div>
      </nav>
      </>
    )
  }
  
  export default Header
  