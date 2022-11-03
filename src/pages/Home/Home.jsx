import Cases from "components/Cases";
import Contact from "components/Contact";
import Navbar from "components/Navbar";
import WhatWeDo from "components/WhatWeDo";
import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [active, setActive] = useState('whatWeDo');

  const whoWeAre = useRef(null);
  const whatWeDo = useRef(null);
  const cases = useRef(null);
  const oursCustomer = useRef(null);
  const contact = useRef(null);
  
  function handleActiveChange(value){
    switch (value) {
      case value = 'whoWeAre':
        setActive('whoWeAre');
        scrollToSection(whoWeAre)
        break;
      case value = 'whatWeDo':
          setActive('whatWeDo');
          scrollToSection(whatWeDo)
          break;
      case value = 'cases':
            setActive('cases');
            scrollToSection(cases)
            break;
      case value = 'oursCustomer':
        setActive('oursCustomer');
        scrollToSection(oursCustomer)
        break;
      case value = 'contact':
        setActive('contact');
        scrollToSection(contact)
        break;
      default:
        setActive('whatWeDo');
    }
  }
  useEffect(() => {
  }, [active])


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };


  return(
    <>
    <div className="flex flex-col">
      <Navbar active={active} handleActiveChange={handleActiveChange} />
      <div className="flex flex-col sm:ml-[calc(13%+105px)] ml-[24px] w-[350px] flex flex-col">
        <div ref={whatWeDo}><WhatWeDo /> </div>
        <div ref={cases}><Cases/> </div>
        <div ref={contact}><Contact/></div>
      </div>
      {/* <div className="sm:hidden ml-[24px] w-[350px] flex flex-col">
        <div><WhatWeDo /> </div>
        <div><Cases/> </div>
        <div><Contact/></div>
      </div> */}
      </div>
    </>
    
  )
};

export default Home;