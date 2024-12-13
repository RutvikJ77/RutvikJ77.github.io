
import notFoundImage from "../../media/pcover-one.png";


function NotFound() {

  return (
        <>
        <div className="content-wrapper">
        <div className={`flex flex-col items-center mx-auto md:w-4/5 font-professional`}>
            <img
              src={notFoundImage}
              alt="Cover"
              className="w-full mt-0 md:w-3/4 md:mt-20 transition-all"
            />
            <div className="-mt-20 mb-20 lg:-mt-48 flex flex-col gap-12 w-3/4 md:w-3/6">
              <div className={`text-3xl leading-none font-instrument-serifb text-black`}>
                  <>
                    Oops!?<br />
                    Let's<br />
                    Redirect<br />
                  </>
              </div>

              <div className="text-base font-satoshim w-5/10 mt-6">
                    Visit <a href="/" className="email border-b-2 border-yellow-200">home</a> or reach out to me <a className="email border-b-2 border-yellow-200" href="mailto:rutvikj77@outlook.com">rutvikj77@outlook.com</a>
              </div>
            </div>
          </div>
          </div>
        </>
      );
}

export default NotFound;
