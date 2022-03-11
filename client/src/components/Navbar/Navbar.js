import React from "react";
import { ThemeContext } from "../ThemeContext";

import { Toggle } from "../ThemeToggle";
// import KeepIcon from "./IconComponents/KeepIcon";


const Navbar = () => {
  return (  
    <div className="transition-all bg-gradient-to-r from-zinc-400 duration-300 w-screen flex flex-row items-center py-1.5 px-2 sm:pl-5 sm:pr-7 justify-between shadow border-b dark:border-gray-600 z-20 fixed top-0" >
      <div className="flex">
        {/* <svg className="stroke-2 pr-4 fill-white" viewBox="87.622 225.795 67.234 67.368" xmlns="http://www.w3.org/2000/svg" width="60">
          <path d="M310 1959 c-67 -27 -151 -108 -182 -176 -17 -38 -22 -67 -23 -138 0 -108 19 -158 89 -233 161 -172 442 -130 546 82 52 106 50 211 -8 319 -31 58 -74 97 -145 134 -73 37 -198 43 -277 12z m257 -38 c68 -30 89 -52 72 -79 -23 -37 15 -77 52 -54 25 16 40 -14 46 -92 5 -57 3 -62 -18 -71 -31 -13 -36 -48 -9 -75 19 -19 19 -22 5 -50 -21 -40 -74 -100 -89 -100 -7 0 -21 9 -31 20 -33 37 -54 24 -65 -40 -5 -34 -6 -35 -60 -40 -30 -3 -67 -3 -82 -1 -24 3 -28 8 -28 36 0 43 -22 62 -55 47 -14 -7 -25 -16 -25 -22 0 -22 -30 -8 -68 34 -64 70 -67 80 -32 115 17 16 30 34 30 40 0 17 -48 44 -66 37 -15 -6 -16 1 -12 52 3 32 13 73 22 90 15 29 18 30 46 20 50 -17 77 22 50 72 -8 15 -5 22 18 38 78 56 200 65 299 23z m-327 -98 c0 -16 -36 -17 -46 -1 -4 6 1 17 11 25 20 14 35 3 35 -24z m450 2 c0 -8 -9 -15 -20 -15 -20 0 -26 11 -13 23 12 13 33 7 33 -8z m-507 -232 c3 -5 -6 -16 -19 -26 -24 -18 -24 -18 -24 8 0 18 5 25 19 25 11 0 22 -3 24 -7z m560 -8 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z m-405 -200 c-2 -26 -7 -29 -33 -19 -14 6 -14 8 1 25 23 26 34 24 32 -6z m250 13 c8 -8 9 -15 1 -25 -18 -21 -34 -15 -34 12 0 27 14 32 33 13z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M306 1739 c-62 -54 -72 -142 -20 -190 24 -23 32 -24 179 -26 137 -1 155 1 170 17 15 17 15 21 0 49 -15 30 -15 33 5 58 11 14 20 32 20 39 0 19 -37 36 -60 29 -15 -5 -20 -2 -20 13 0 33 -21 39 -133 40 -106 1 -108 1 -141 -29z m157 -20 l15 -21 7 21 c5 16 15 21 41 21 39 0 39 -2 19 -59 -8 -22 -10 -41 -5 -41 6 0 10 4 10 9 0 10 62 41 82 41 7 -1 -1 -13 -19 -28 l-32 -28 19 -32 c27 -43 25 -47 -12 -47 -26 0 -37 6 -50 30 l-17 30 -1 -30 c0 -27 -3 -30 -35 -31 -29 0 -35 3 -30 15 4 9 9 37 12 62 l5 45 -36 -4 c-34 -4 -36 -3 -36 24 0 25 -2 27 -15 13 -15 -14 -41 -127 -32 -136 3 -2 13 9 23 26 14 23 26 31 46 31 31 0 38 -23 16 -53 -14 -18 -86 -26 -125 -13 -44 14 -41 110 5 153 34 32 124 33 145 2z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
        </svg> */}
        {/* <svg className="stroke-2 fill-white " viewBox="170.122 247.489 193.677 20.4" xmlns="http://www.w3.org/2000/svg" width={200}>
          <path d="M961 1734 c-26 -21 -31 -33 -31 -68 0 -70 59 -112 124 -88 24 10 33 9 47 -3 15 -14 18 -13 33 10 22 34 79 35 106 3 14 -17 22 -20 30 -12 8 8 0 34 -32 98 -23 47 -47 85 -53 83 -5 -2 -28 -39 -51 -81 -26 -49 -44 -74 -49 -66 -5 8 -21 10 -45 7 -43 -5 -52 -1 -70 32 -11 22 -10 27 13 47 22 18 32 21 56 14 33 -9 41 -5 41 20 0 12 -11 20 -31 24 -48 9 -55 8 -88 -20z m249 -80 c0 -8 -9 -14 -20 -14 -19 0 -28 28 -13 43 9 9 33 -12 33 -29z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M1300 1665 c0 -88 2 -95 20 -95 16 0 19 8 22 55 l3 55 35 -46 c19 -26 45 -54 58 -62 l22 -14 0 101 c0 55 -3 101 -7 101 -21 -1 -32 -20 -35 -63 l-3 -47 -42 55 c-63 81 -73 75 -73 -40z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M1490 1666 c0 -89 1 -96 20 -96 16 0 20 7 20 38 l0 37 33 -38 c23 -28 37 -36 50 -32 24 10 22 16 -18 55 l-35 34 37 38 c31 32 35 40 23 48 -23 15 -27 13 -57 -27 l-28 -37 -5 35 c-3 22 -11 35 -22 37 -16 3 -18 -6 -18 -92z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M1722 1747 c-6 -7 -27 -46 -46 -87 -30 -63 -34 -76 -21 -83 18 -10 35 -1 35 19 0 10 12 14 44 14 36 0 46 -4 51 -20 7 -21 30 -27 40 -10 6 10 -68 164 -84 174 -5 3 -13 0 -19 -7z m16 -105 c-27 -5 -32 2 -16 27 l13 21 12 -23 c10 -19 9 -22 -9 -25z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M1863 1753 c-9 -3 -13 -32 -13 -94 l0 -89 65 0 c59 0 65 2 65 21 0 19 -5 21 -45 17 l-45 -3 0 77 c0 76 -2 82 -27 71z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M2000 1665 l0 -95 70 0 c67 0 70 1 70 23 0 22 -4 23 -50 21 -37 -1 -50 2 -50 12 0 9 12 14 35 14 31 0 35 3 35 26 0 24 -3 26 -35 22 -24 -3 -35 0 -35 9 0 9 16 13 50 13 47 0 50 2 50 25 0 24 -2 25 -70 25 l-70 0 0 -95z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M2170 1671 c0 -66 4 -92 15 -101 13 -11 15 -6 16 31 1 24 1 53 0 64 -2 14 15 1 54 -42 31 -35 61 -63 66 -63 5 0 9 45 9 101 0 89 -2 100 -17 97 -19 -4 -36 -53 -28 -85 3 -13 4 -23 1 -23 -2 0 -22 25 -45 55 -60 80 -71 75 -71 -34z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M2355 1720 c-4 -23 -4 -66 0 -96 l6 -54 44 0 c64 0 105 37 105 94 0 57 -31 87 -99 94 l-49 4 -7 -42z m84 -11 c19 -7 31 -18 31 -29 0 -10 2 -25 5 -32 4 -10 -6 -18 -33 -26 -22 -7 -41 -12 -43 -12 -2 0 -5 25 -6 55 -3 59 -2 60 46 44z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M2555 1671 c-39 -79 -42 -90 -27 -96 11 -4 22 1 31 14 18 28 71 28 96 1 20 -22 45 -27 45 -8 0 20 -80 178 -90 178 -5 0 -30 -40 -55 -89z m68 -5 c3 -8 -1 -17 -10 -20 -20 -8 -25 -3 -17 18 8 20 20 21 27 2z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
          <path d="M2722 1673 c0 -77 3 -91 19 -101 17 -11 19 -9 19 18 0 25 4 30 25 30 18 0 28 -7 35 -25 10 -27 17 -30 39 -16 10 6 10 13 2 28 -6 12 -8 42 -5 70 8 61 -6 75 -81 81 l-53 4 0 -89z m108 17 c0 -13 -7 -20 -19 -20 -11 0 -26 -3 -35 -6 -12 -5 -16 0 -16 20 0 23 4 26 35 26 28 0 35 -4 35 -20z" transform="matrix(0.1, 0, 0, -0.1, 77.122353, 423.689362)"/>
        </svg> */}
        <svg className="stroke-2 fill-white " viewBox="0 0 500 500" width={120}>
          <path d="M 278.689 361.061 C 278.689 361.061 277.254 361.351 346.91 360.954 L 253.94 240.498 L 292.895 204.151 C 303.087 194.694 313.465 185.428 324.024 176.357 C 333.931 167.858 349.351 164.418 362.667 164.418 C 362.803 164.418 362.667 159.733 362.667 159.733 C 362.667 159.733 362.608 159.712 315.154 160.947 C 314.926 160.953 315.02 169.9 313.997 171.995 C 311.369 177.375 307.29 181.945 303.001 186.194 C 283.396 205.489 233.615 251.784 227.972 257.018 C 227.858 247.515 227.977 164.27 227.977 164.27 L 257.57 164.276 L 257.57 159.59 L 171.3 159.59 L 171.3 164.276 L 197.546 164.254 L 197.603 355.783 L 170.325 355.773 L 170.325 361.001 C 170.319 360.93 257.212 361.001 257.212 361.001 L 257.212 355.91 L 227.768 355.915 L 227.79 265.417 C 227.745 265.406 229.934 263.651 231.46 262.427 C 234.324 265.867 237.647 269.85 237.681 269.861 L 305.355 355.833 L 278.689 355.838 L 278.689 361.061 Z" />
          <path d="M 349.372 152.992 C 313.481 135.905 267.087 130.022 223.414 137.024 C 185.786 143.27 152.088 156.535 126.794 175.069 C 65.791 219.497 47.773 283.135 80.511 338.179 C 101.091 372.278 139.749 403.689 194.398 418.398 C 216.489 424.267 240.166 427.438 264.161 427.733 C 267.432 427.766 270.693 427.657 273.938 427.405 C 304.701 424.913 333.755 417.128 357.879 404.915 C 366.795 400.438 379.468 391.052 388.786 382.697 C 418.611 355.954 413.824 322.39 413.824 322.39 L 402.282 322.348 C 402.282 322.348 401.483 330.597 401.343 334.283 C 399.885 344.68 395.941 355.703 388.056 364.962 C 385.36 368.219 382.59 371.433 379.825 374.601 C 352.228 406.253 289.561 421.296 231.669 409.883 C 202.024 403.924 173.566 392.449 157.824 377.617 C 143.366 363.995 99.206 334.632 110.522 262.386 C 114.986 233.886 122.105 224.19 129.717 212.881 C 145.942 188.775 176.327 167.826 188.383 161.449 C 193.406 158.792 221.988 148.625 235.628 147.094 C 263.627 143.951 333.318 145.602 365.169 170.997 C 384.41 186.425 396.983 204.701 401.686 224.049 C 402.211 226.783 403.721 232.248 403.721 232.248 L 414.421 232.248 L 414.492 147.294 L 401.845 147.311 C 401.957 147.311 401.822 150.627 401.755 152.25 C 401.456 160.643 386.914 163.497 375.324 162.259 C 365.077 161.156 357.353 156.846 349.372 152.992 Z M 1143.745 23.735 L 1143.745 25.065 L 1138.368 25.065 L 1138.368 34.823 L 1136.174 34.823 L 1136.174 25.065 L 1130.797 25.065 L 1130.797 23.735 L 1143.745 23.735 Z M 1148.106 23.735 L 1151.215 23.735 L 1155.789 33.112 L 1160.339 23.735 L 1163.403 23.735 L 1163.403 34.823 L 1161.348 34.823 L 1161.348 28.272 L 1161.368 27.153 L 1161.39 25.469 L 1156.84 34.823 L 1154.69 34.823 L 1150.117 25.469 L 1150.117 25.805 L 1150.142 27.043 L 1150.187 28.264 L 1150.187 34.804 L 1148.106 34.804 L 1148.106 23.735 Z" transform="matrix(0.999848, 0.017451, -0.017451, 0.999848, 2.071659, -20.855738)"/>
          <g transform="matrix(5.671142, 0, 0, 5.486385, 63.055569, 119.590775)"/>
        </svg>
        <p className="select-none cursor-pointer transition duration-300 text-6xl font-mono Helvetica font-black self-center font-medium text-white ml-1 dark:text-offwhite">
          CanKalendar
        </p>
      </div>
        <Toggle />

      
    </div>
  );
};

export default Navbar;
