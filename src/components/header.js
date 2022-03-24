import React from 'react';

const Header = ({ siteTitle }) => {
    return (
      <>
        <nav class="justify-between flex-wrap bg-red-200 p-5">
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-between">
            <div class="text-lg text-indigo-900 pl-5 text-center"><a href="/main">
              SS </a>
            </div>
            <div>
                <div class="text-lg float-right text-indigo-900 pr-5 pl-5 text-center"><a href="/about">
                  About </a>
                </div>
                <div class="text-lg float-right text-indigo-900 pl-5 pr-5 text-center">
                  Work
                </div>
                <div class="text-lg float-right text-indigo-900 pl-5 pr-5 text-center">
                  Resume
                </div>
              </div>
          </div>
      </nav>
      </>
    )
  }
  
  export default Header
  