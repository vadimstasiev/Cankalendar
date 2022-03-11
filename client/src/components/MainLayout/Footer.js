import React from "react";
const Footer = (props) => {
    return (
      <footer className="container mx-auto py-8 border-t border-zinc-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-200">Copyright © 2021 CanKalendar</h3>
                {/* <p className="py-4 dark:text-zinc-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;