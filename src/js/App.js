import { useState } from "react";
import coverOne from "../media/cover-one.png";
import coverTwo from "../media/cover-two.png";
import coverThree from "../media/cover-three.png";

function App() {
  const [menu, setMenu] = useState(0);
  // 0, 1, 2 for three menu items

  return (
    <>
      <div className="flex flex-col items-center mx-auto md:w-4/5">
        <img
          src={menu === 0 ? coverOne : menu === 2 ? coverTwo : coverThree}
          className="w-full mt-0  md:w-3/4 md:mt-20 transition-all"
        />
        <div className="-mt-20 mb-20 lg:-mt-48 flex flex-col gap-12 w-3/4 md:w-3/6">
          <div className="text-2xl leading-none font-satoshib">
            figuring
            <br />
            it
            <br />
            out.
            <br />
          </div>
          <nav className="flex flex-row gap-6 md:gap-8 text-yellow-200 text-xs font-satoshib">
            <button
              className={`transition-all font-bold uppercase tracking-widest ${
                menu === 0 ? "opacity-100" : "opacity-50"
              } `}
              onClick={() => setMenu(0)}
            >
              about
            </button>
            <button
              onClick={() => setMenu(1)}
              className={`active:text-xs transition-all font-bold uppercase tracking-widest ${
                menu === 1 ? "opacity-100" : "opacity-50"
              }`}
            >
              work
            </button>
            <button
              className={`transition-all font-bold uppercase active:text-xs tracking-widest ${
                menu === 2 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setMenu(2)}
            >
              curations
            </button>
          </nav>
          <div className="text-base font-satoshim w-5/10 min-h-[150px] ">
            {menu === 0 &&
              `hey, i'm rutvik. i seek to create and consume experiences in every possible way i can. currently doing it with, data, design and a blend of analytics. `}

            {menu === 0 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://twitter.com/0xrutvik">tw</a>
                </div>
              </div>
            )}
            {menu === 1 && (<> i've immersed myself in diverse roles, from advising web3 projects as an ecosystem marketing manager to accelerating social media engagement as a marketing analyst at <a href="https://polygon.technology"><b>polygon labs</b></a> for past 2 years and leading community growth, while extensively working with data and visualisations to drive decisions, have all pointed
            my current interests in web3 and data to power the transparency required in the system and eventually create a seamless experience for 'people'. <br /><br />
            with that said, i am open to all the possibilites that can help accelerate the vision.</>)}
            {menu === 1 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://rutvik-j.github.io/resume">rés</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://linkedin.com/in/rutvikjoshi">li</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://github.com/RutvikJ77">gh</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://www.kaggle.com/rutvikj77">kg</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://public.tableau.com/app/profile/rutvik.j">viz</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://devpost.com/rutvikj">idea → prod</a>
                </div>
              </div>
            )}
            {menu === 2 &&
              <>are we creators or curators?</>}
            {menu === 2 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://hashnode.com/@RutvikJ">bluffs</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://mirror.xyz/0x9b98DCA799Ac0a542A96AE87819Cb6CFaebA026F">web3</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://medium.com/@rutvikj">psy</a>
                </div>
              </div>
            )}
          </div>
          <div className="text-stone-700 font-satoshir">
            I am up for discussions, feel free to initiate one at <a className="email" href="mailto:rutvikj77@outlook.com">rutvikj77@outlook.com</a> or any socials.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
