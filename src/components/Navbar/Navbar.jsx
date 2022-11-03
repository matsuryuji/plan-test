import React from "react";
import { motion } from "framer-motion"
import LOGO from 'assets/logo-planxp.png';
import { HiArrowRight } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import {  useState } from "react";
import { MdClose } from "react-icons/md";
import { slide as Menu } from 'react-burger-menu'


const Navbar = ({active, handleActiveChange}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange =  (state) => {
    setMenuOpen(state.isOpen);
  }

  const toggleMenu =  () => {
    setMenuOpen(state => !state.isOpen);
  }
  return(
    <>
      <div className="sm:flex flex-col justify-between h-[100vh] border-r-[2px] border-[#292929] fixed hidden" style={{width: 'min-content'}}>
        <div>
          <img alt="" className="w-[140px] h-[70px] ml-[50px] mt-[48px]" src={LOGO}/>
        </div>
        <div className="leading-[1.3] mb-[80px]">
          <motion.div initial={{opacity: active === 'whoWeAre' ? 0.4: 1}} animate={{opacity: active === 'whoWeAre' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} onClick={()=> {handleActiveChange('whoWeAre')}}  className={`w-[140px] relative mx-[48px] h-[auto] cursor-pointer`}>
            <span className="-z-[1] text-[60px] text-[#292929] font-bold">01.</span>
            <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[15px] text-[#fff] w-[100%] font-medium">/QUEM SOMOS</span>
          </motion.div>
          <motion.div initial={{opacity: active === 'whatWeDo' ? 0.4: 1}} animate={{opacity: active === 'whatWeDo' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} className="w-[140px] relative mx-[48px] h-[auto] cursor-pointer" style={{opacity: active === 2? '0.6': '1'}} onClick={()=> {handleActiveChange('whatWeDo')}}>
            <span className="-z-[1] text-[60px] text-[#292929] font-bold">02.</span>
            <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[15px] text-[#fff] w-[100%] font-medium">/O QUE FAZEMOS</span>
          </motion.div>
          <motion.div initial={{opacity: active === 'cases' ? 0.4: 1}} animate={{opacity: active === 'cases' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}}  className="w-[140px] relative mx-[48px] h-[auto] cursor-pointer"  onClick={()=>{handleActiveChange('cases')}}>
            <span className="-z-[1] text-[60px] text-[#292929] font-bold">03.</span>
            <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[15px] text-[#fff] w-[100%] font-medium">/PLAN NEWS</span>
          </motion.div>
          <motion.div initial={{opacity: active === 'oursCustomer' ? 0.4: 1}} animate={{opacity: active === 'oursCustomer' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}}  className="w-[150px] relative mx-[48px] h-[auto] cursor-pointer" onClick={()=>handleActiveChange('oursCustomer')}>
            <span className="-z-[1] text-[60px] text-[#292929] font-bold">04.</span>
            <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[15px] text-[#fff] w-[100%] font-medium">/NOSSOS CLIENTES</span>
          </motion.div>
          <motion.div initial={{opacity: active === 'contact' ? 0.4: 1}} animate={{opacity: active === 'contact' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}}  className="w-[140px] relative mx-[48px] h-[auto] cursor-pointer"  onClick={()=>handleActiveChange('contact')}>
            <span className="-z-[1] text-[60px] text-[#292929] font-bold">05.</span>
            <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[15px] text-[#fff] w-[100%] font-medium">/CONTATO</span>
          </motion.div>
        </div>
        <div className="border-t-[2px]  border-[#292929] relative">
          <motion.div initial={{opacity: 1}} animate={{opacity: 0.4}}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} className="w-[140px] relative mx-[48px] h-[auto] mb-[24px] cursor-pointer">
            <span className="-z-[1] text-[60px] text-[#292929] font-bold">;)</span>
            <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[60%] left-[50%] text-[22px] text-[#939598] w-[100%] font-medium leading-[1.25]">Que tal inovar com a gente?</span>
            <HiArrowRight style={{transform: 'rotate(45deg)'}} className="text-[#fff] flex flex-end absolute right-[-30%] bottom-[-10%]"/>
          </motion.div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-row justify-between px-[30px] py-[8px] fixed sm:hidden h-[auto] w-[100vmin] z-[100]">
        <img alt="" className="w-[78px] h-[38px]" src={LOGO}/>
        <div className="mt-[50px] bg-[#1E1E1E]">
          <Menu isOpen={menuOpen}
              onStateChange={(state) => handleStateChange(state)}
              right
              width={ 'calc(100% - 25vh)' }
              className="bg-[#1E1E1E]"
              >              
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100vh'}}>
              <div className="leading-[1.3] mb-[80px]">
                <motion.div initial={{opacity: active === 'whoWeAre' ? 0.4: 1}} animate={{opacity: active === 'whoWeAre' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} onClick={()=> {handleActiveChange('whoWeAre')}}  className={`w-[140px] relative h-[auto] cursor-pointer`}>
                  <span className="-z-[1] text-[60px] text-[#292929] font-bold">01.</span>
                  <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[16px] text-[#fff] w-[100%] font-medium">/QUEM SOMOS</span>
                </motion.div>
                <motion.div initial={{opacity: active === 'whatWeDo' ? 0.4: 1}} animate={{opacity: active === 'whatWeDo' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} className="w-[140px] relative h-[auto] cursor-pointer" style={{opacity: active === 2? '0.6': '1'}} onClick={()=> {handleActiveChange('whatWeDo')}}>
                  <span className="-z-[1] text-[60px] text-[#292929] font-bold">02.</span>
                  <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[16px] text-[#fff] w-[100%] font-medium">/O QUE FAZEMOS</span>
                </motion.div>
                <motion.div initial={{opacity: active === 'cases' ? 0.4: 1}} animate={{opacity: active === 'cases' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}}  className="w-[140px] relative h-[auto] cursor-pointer"  onClick={()=>{handleActiveChange('cases')}}>
                  <span className="-z-[1] text-[60px] text-[#292929] font-bold">03.</span>
                  <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[16px] text-[#fff] w-[100%] font-medium">/PLAN NEWS</span>
                </motion.div>
                <motion.div initial={{opacity: active === 'oursCustomer' ? 0.4: 1}} animate={{opacity: active === 'oursCustomer' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}}  className="w-[150px] relative h-[auto] cursor-pointer" onClick={()=>handleActiveChange('oursCustomer')}>
                  <span className="-z-[1] text-[60px] text-[#292929] font-bold">04.</span>
                  <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[16px] text-[#fff] w-[100%] font-medium">/NOSSOS CLIENTES</span>
                </motion.div>
                <motion.div initial={{opacity: active === 'contact' ? 0.4: 1}} animate={{opacity: active === 'contact' ? 0.4: 1 }}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}}  className="w-[140px] relative h-[auto] cursor-pointer"  onClick={()=>handleActiveChange('contact')}>
                  <span className="-z-[1] text-[60px] text-[#292929] font-bold">05.</span>
                  <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[16px] text-[#fff] w-[100%] font-medium">/CONTATO</span>
                </motion.div>
              </div>
              <div className="border-t-[2px]  border-[#292929] relative">
                <motion.div initial={{opacity: 1}} animate={{opacity: 0.4}}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} className="w-[140px] relative mx-[48px] h-[auto] mb-[24px] cursor-pointer">
                  <span className="-z-[1] text-[60px] text-[#292929] font-bold">;)</span>
                  <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[60%] left-[50%] text-[20px] text-[#939598] w-[100%] font-medium leading-[1.25]">Que tal inovar com a gente?</span>
                  <HiArrowRight style={{transform: 'rotate(45deg)'}} className="text-[#fff] flex flex-end absolute right-[-30%] bottom-[10%]"/>
                </motion.div>
              </div>
              </div>
          </Menu>
        </div>
        <div role="button" onClick={() => toggleMenu()} className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
            <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
              {!menuOpen ? <HiMenu/> : <MdClose />}
            </div>
        </div>
      </div>
    </>
  )
};

export default Navbar;