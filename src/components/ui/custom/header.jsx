import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      {' '}
      <section class="py-12 relative">
        <div class="w-full  max-w-7xl  mx-auto px-4 md:px-8">
          <div class="grid grid-cols-12 gap-y-11">
            <div class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
              <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">
                Lets <span className="text-fuchsia-600"> GiftHub </span> Find
                the Best Gift <span className="text-fuchsia-600"> Ideas</span>
              </h2>
              <p class="font-manrope text-base leading-10 text-black mb-9">
                Find gifts that truly matter for every occasion with our Gift
                Finder
              </p>
              <div class="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
                <div class="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200 ">
                  <button class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M11.7143 19.75C11.7143 20.5784 11.0235 21.25 10.1714 21.25C9.31933 21.25 8.62857 20.5784 8.62857 19.75M17.8857 19.75C17.8857 20.5784 17.195 21.25 16.3429 21.25C15.4908 21.25 14.8 20.5784 14.8 19.75M4.51429 6.25L5.96114 13.9854C6.25319 15.5468 6.39921 16.3275 6.95475 16.7887C7.51029 17.25 8.30451 17.25 9.89296 17.25H16.6218C18.2103 17.25 19.0046 17.25 19.5601 16.7887C20.1157 16.3274 20.2617 15.5467 20.5537 13.9852L21.1146 10.9852C21.5248 8.79152 21.7299 7.69469 21.1301 6.97234C20.5303 6.25 19.4144 6.25 17.1827 6.25H4.51429ZM4.51429 6.25L4 3.25"
                        stroke="#871F9E"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <p class="font-medium text-sm text-black">No SignIn</p>
                </div>
                <div class="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200 ">
                  <button class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10.25C20 11.9069 16.4183 13.25 12 13.25C7.58172 13.25 4 11.9069 4 10.25M20 14.25C20 15.9069 16.4183 17.25 12 17.25C7.58172 17.25 4 15.9069 4 14.25M20 18.25C20 19.9069 16.4183 21.25 12 21.25C7.58172 21.25 4 19.9069 4 18.25M20 6.25C20 7.90685 16.4183 9.25 12 9.25C7.58172 9.25 4 7.90685 4 6.25C4 4.59315 7.58172 3.25 12 3.25C16.4183 3.25 20 4.59315 20 6.25Z"
                        stroke="#871F9E"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <p class="font-medium text-sm text-black">No Cart</p>
                </div>
                <div class="flex items-center gap-4 pl-6  ">
                  <button class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19.25L20 3.25M10 5.75C10 7.683 8.433 9.25 6.5 9.25C4.567 9.25 3 7.683 3 5.75C3 3.817 4.567 2.25 6.5 2.25C8.433 2.25 10 3.817 10 5.75ZM21 16.75C21 18.683 19.433 20.25 17.5 20.25C15.567 20.25 14 18.683 14 16.75C14 14.817 15.567 13.25 17.5 13.25C19.433 13.25 21 14.817 21 16.75Z"
                        stroke="#871F9E"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <p class="font-medium text-sm text-black">No Wishlist</p>
                </div>
              </div>

              <a
                href="javascript:;"
                class="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-fuchsia-600 transition-all duration-500 hover:shadow-fuchsia-400 hover:bg-fuchsia-700"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14119_17549)">
                    <path
                      d="M10 0.5L20 20.5L10 17.1263L0 20.4794L10 0.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14119_17549">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Link
                  href="/finding-gift"
                  class="px-2 font-semibold text-base text-white"
                >
                  Find a gift now
                </Link>
              </a>
            </div>
            <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
              <img
                src="header.svg"
                alt="header"
                class="w-full h-full max-lg:rounded-3xl lg:rounded-r-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
