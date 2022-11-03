import React from "react";
import WWA from 'assets/wwa.webp';
import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi";
import KISAFIX from 'assets/customer/kisafix.webp';
import GERDAU from 'assets/customer/gerdau.webp';
import ATLAS from 'assets/customer/atlas.webp';
import BETTANIN from 'assets/customer/bettanin.webp';
import DASS from 'assets/customer/dass.webp';
import TAURUS from 'assets/customer/taurus.webp';
import AZUL from 'assets/customer/azul.webp';
import FILA from 'assets/customer/fila.webp';
import KILLING from 'assets/customer/killing.webp';

const Customer = () => {
  return(
    <>
    <div className="sm:flex flex-row jutify-start mt-[180px] h-[100vh] hidden">
          <div className="flex flex-col">
            <div className="w-[auto] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">04.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[54%] left-[50%] text-[44px] text-[#939598] w-[100%] font-light break-all">/Nossos Clientes</span>
            </div>
            <div className="flex flex-col w-[500px]">
              <span className="text-[12px] text-[#fff] w-[100%] font-normal mb-[16px]">O Grupo Plan Marketing ao longo dos seus 20 anos já desenvolveu mais de 3500 projetos sempre com comprometimento e prezado pela qualidade.</span>
            </div>
            <div className="flex flex-col w-[auto] mr-[17px]">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[284px] h-[auto]  cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-all font-medium ">
                CLIOUE AQUI PARA VER TODOS OS CLIENTES
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[5%] right-[-2%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-[24px]">
              <img src={KISAFIX} alt="" className="w-[184px] h-[110px]"/>
              <img src={GERDAU} alt="" className="w-[184px] h-[110px]"/>
              <img src={ATLAS} alt="" className="w-[184px] h-[110px]"/>
              <img src={BETTANIN} alt="" className="w-[184px] h-[110px]"/>
            </div>
            <div className="flex flex-row gap-[24px]">
              <img src={DASS} alt="" className="w-[184px] h-[110px]"/>
              <img src={AZUL} alt="" className="w-[184px] h-[110px]"/>
              <img src={TAURUS} alt="" className="w-[184px] h-[110px]"/>
              <img src={FILA} alt="" className="w-[184px] h-[110px]"/>
            </div>
            <div className="flex flex-row gap-[24px]">
              <img src={KILLING} alt="" className="w-[184px] h-[110px]"/>
            </div>
          </div>
    </div>
    <div className="flex flex-col h-[auto] mt-[80px] sm:hidden z-index-[-1]">
          <div className="flex flex-col w-[80vmin] ">
          <div className="w-[auto] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">04.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[54%] left-[54%] text-[44px] text-[#939598] w-[100%] font-light break-all">/Nossos Clientes</span>
            </div>
            <div className="flex flex-col w-[auto]  pb-[16px]">
              <span className="text-[12px] text-[#fff] w-[100%] font-normal">O Grupo Plan Marketing ao longo dos seus 20 anos já desenvolveu mais de 3500 projetos sempre com comprometimento e prezado pela qualidade.</span>
            </div>
          </div>
          <div className="flex flex-col w-[auto] mr-[17px]">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[284px] h-[auto]  cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-all font-medium ">
                CLIOUE AQUI PARA VER TODOS OS CLIENTES
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[5%] right-[-2%]"
                />
              </motion.div>
          </div>
          <div className="flex flex-row gap-[24px] mt-[8px]">
            <div className="flex flex-row gap-[24px]">
              <div className="flex flex-col ">
                <img src={KISAFIX} alt="" className="w-[140px] h-[81px]"/>
                <img src={ATLAS} alt="" className="w-[140px] h-[81px]"/>
                <img src={DASS} alt="" className="w-[140px] h-[81px]"/>
                <img src={TAURUS} alt="" className="w-[140px] h-[81px]"/>
                <img src={KILLING} alt="" className="w-[140px] h-[81px]"/>
              </div>
            </div>
            <div className="flex flex-row gap-[24px]">
              <div className="flex flex-col ">
                <img src={GERDAU} alt="" className="w-[140px] h-[81px]"/>
                <img src={BETTANIN} alt="" className="w-[140px] h-[81px]"/>
                <img src={AZUL} alt="" className="w-[140px] h-[81px]"/>
                <img src={FILA} alt="" className="w-[140px] h-[81px]"/>
                </div>
            </div>
          </div>
    </div>
    </>
  )
};

export default Customer;