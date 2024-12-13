import { useState, useEffect } from "react";
import coverOne from "../media/cover-one.png";
import coverTwo from "../media/cover-two.png";
import coverThree from "../media/cover-three.png";
import pcoverOne from "../media/pcover-one.png";
import Creative from "./Creative";
import Professional from "./Professional";

function Header() {
  const [menu, setMenu] = useState(0);
  const [isChanged, setIsChanged] = useState(true);
  // 0, 1, 2 for three menu items

  useEffect(() => {
    document.body.className = isChanged ? 'theme-professional' : 'theme-creative';
  }, [isChanged]);

  const professionalOptions = ['about', 'work', 'writings'];
  const creativeOptions = ['self', 'projects', 'musings'];

  const getCoverImage = () => {
    if (isChanged) {
      // Professional mode
      switch(menu) {
        // case 0: return pcoverOne;
        // case 1: return pcoverOne;
        // case 2: return pcoverOne;
        default: return pcoverOne;
      }
    } else {
      // Creative mode
      switch(menu) {
        case 0: return coverOne;
        case 1: return coverThree;
        case 2: return coverTwo;
        default: return coverOne;
      }
    }
  };

  return (
    <>
    <div className="content-wrapper">
    <div className={`flex flex-col items-center mx-auto md:w-4/5 ${isChanged ? 'font-professional' : 'font-creative'}`}>
        <img
          src={getCoverImage()}
          alt="Cover"
          className="w-full mt-0 md:w-3/4 md:mt-20 transition-all"
        />
        <div className="-mt-20 mb-20 lg:-mt-48 flex flex-col gap-12 w-3/4 md:w-3/6">
          <div className={`${isChanged ? 'text-3xl' : 'text-2halfxl'} leading-none ${isChanged ? 'font-instrument-serifb' : 'font-satoshib'} ${isChanged ? 'text-black' : 'text-white-200'}`}>
            {isChanged ? (
              <>
                Ideate<br />
                Evaluate<br />
                Iterate.<br />
              </>
            ) : (
              <>
                figuring<br />
                it<br />
                out.<br />
              </>
            )}
          </div>
            <nav className={`flex flex-row gap-6 md:gap-8 ${
                  isChanged ? "" : "text-yellow-200"
                } text-xs font-satoshib`}>
            {(isChanged ? professionalOptions : creativeOptions).map((option, index) => (
              <button
                key={option}
                className={`transition-all font-bold uppercase ${
                  menu === index ? "opacity-100" : "opacity-50"
                } tracking-widest`}
                onClick={() => setMenu(index)}
              >
                {option}
              </button>
            ))}
            <button
              className={`transition-all font-bold uppercase active:text-xs ${
                !isChanged ? 'opacity-50' : 'opacity-50'
              } ${
                !isChanged ? 'font-instrument-serif' : 'font-instrument-serif'
              }`}
              onClick={() => setIsChanged(!isChanged)}
            >
              {isChanged ? 'Right half' : 'Left half'}
            </button>
          </nav>
          <div className="scrollable-content">
          {isChanged ? <Professional menu={menu}/> : <Creative menu={menu}/>}
          </div>
          <div className="text-stone-700 font-satoshir">
            Get in touch at <a className="email" href="mailto:rutvikj77@outlook.com">rutvikj77@outlook.com</a> or any socials.
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;

