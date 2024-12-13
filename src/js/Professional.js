
function Professional( {menu} ) {

  return (
  <>
  <div className="text-base font-satoshim w-5/10 min-h-[150px] ">
            {menu === 0 &&
              (<>Hello, I'm Rutvik. 
              <br /><br />I seek to create experiences in every possible way. Currently doing it with data, design and a blend of analytics.</>)}

            {menu === 0 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                {/* <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://twitter.com/0xrutvik">x (twitter)</a>
                </div> */}
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://linkedin.com/in/rutvikjoshi">LinkedIn</a>
                </div>
              </div>
            )}
            {menu === 1 && 
            (<> 
            
            <quote> | Driving Efficiency Through Data </quote> <br /><br />
            
            With a focus on community and stakeholder engagement, I leverage analysis with visual storytelling to drive informed decision-making and create win-win outcomes. 
            My deep interests in blockchain, data and research fuels my vision to enhance transparency and create seamless experiences while embodying my core values of innovation, collaboration, and empowerment.<br /><br />
            
            
            
            <ul><li className="font-satoshib"><a className="title" href="https://polygon.technology">Polygon Labs</a></li></ul>
            <li>Resolved challenges in Web3/Blockchain project strategies, user adoption through market insights and innovative tools.</li>
            <br />
            <ul><li className="font-satoshib"><a className="title" href="https://bluegrid.energy">BlueGrid / DeepSense</a></li></ul>
            <li>Addressed gaps in vessel energy consumption analysis, anomaly detection, and vessel electrification predictions through data-driven approach.</li>
            <br />
            <ul><li className="font-satoshib"><a className="title" href="https://www.canada.ca/en/revenue-agency.html">Canada Revenue Agency</a></li></ul>
            <li>Solving for efficiency through analysis in IT change management, workload distribution, and reporting processes to enhance team productivity.</li>

            
            </>)}
            {menu === 1 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://rutvik-j.github.io/resume">Résume</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://github.com/RutvikJ77">GitHub</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://www.kaggle.com/rutvikj77">Kaggle</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://public.tableau.com/app/profile/rutvik.joshi07">Data Stories</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://devpost.com/rutvikj">Idea → Product</a>
                </div>
              </div>
            )}
            {menu === 2 &&
              <>Curating experiences in...</>}
            {menu === 2 && (
              <div className="flex flex-row gap-4 font-satoshib text-xs mt-10">
                <div className="border-b-2 border-yellow-200 pb-2">
                  <a href="https://hashnode.com/@RutvikJ">Tech</a>
                </div>
                <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://mirror.xyz/0x9b98DCA799Ac0a542A96AE87819Cb6CFaebA026F">Blockchain</a>
                </div>
                {/* <div className="border-b-2 border-yellow-200 pb-2 ">
                  <a href="https://medium.com/@rutvikj">brain</a>
                </div> */}
              </div>
            )}
          </div>
  </>);
}

export default Professional;
