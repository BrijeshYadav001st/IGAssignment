import React  from "react";
// import CookieConsent from "react-cookie-consent";
// const [footer, setFooter] = useState();
function Cookies({setFooter}) {

    return (
        <div className="fixed left-0 right-0 bottom-0 z-10">
            <section className=" bg-gray-500 h-16 text-2xl flex justify-between items-center text-white position-sticky">
                <div></div>
                <div> Launch Your Own CBD Business</div>
                <div className="pr-20 cursor-pointer" onClick={() => setFooter(false)}> X </div>
            </section>

            {/* <CookieConsent debug={true} >
                <div className="flex justify-center text-2xl">Launch Your Own CBD Business</div>
            </CookieConsent> */}
        </div>
    );
}

export default Cookies;