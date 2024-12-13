
function Creative( {menu} ) {

  return (
    <>
          <div className="text-base font-satoshim w-5/10 min-h-[150px] ">
            {menu === 0 &&
              `a quick question, who are you if not your name?`}

            {menu === 0 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://twitter.com/0xrutvik">x (twitter)</a>
                </div>
              </div>
            )}
            {menu === 1 && (<> 
            
            <quote> | <i>a deep generalist </i></quote> <br /><br />
            
            outright experimenting.</>)}
            {/* {menu === 1 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://rutvik-j.github.io/resume">résume</a>
                </div>
              </div>
            )} */}
            {menu === 2 &&
              <>i write... sometimes

              </>}
            {menu === 2 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://medium.com/@rutvikj">psychology</a>
                </div>
              </div>
            )}
          </div>
    </>
  );
}

export default Creative;
