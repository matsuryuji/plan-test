import React from "react";
import GAME1 from 'assets/games-1.webp';
import GAME2 from 'assets/games-2.webp';
import GAME3 from 'assets/games-3.webp';
import GAME from 'assets/games.webp';
import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi";

const WhatWeDo = () => {
  return(
    <>
    <div className="sm:flex flex-row h-[100vh] mt-[245px] hidden">
          <div className="flex flex-col">
            <div className="w-[140px] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">02.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[40%] left-[54%] text-[16px] text-[#fff] w-[100%] font-medium">/O que fazemos</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[62%] left-[58%] text-[44px] text-[#939598] w-[100%] font-light">/Games</span>
            </div>
            <div className="flex flex-col w-[500px]">
              <span className="text-[22px] text-[#939598] w-[100%] font-normal">Desenvolvimento de games digitais</span>
              <span className="text-[14px] text-[#939598] w-[100%] font-normal my-[20px]">Empresa especialista em desenvolvimento games digitais e gamificação</span>
              <span className="text-[12px] text-[#fff] w-[100%] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.</span>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] ml-[70px]">
            <div className="flex flex-col w-[170px] leading-[25px]">
              <img className="w-[170px] h-[170px]" alt='' src={GAME1}/>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px]" >A PlanXP tem uma equipe qualificada para o desenvolvimento de jogos digitais para dispositivos móveis (smartphones, tablets e afins).</span>
            </div>
            <div className="flex flex-col  w-[170px] leading-[25px]">
              <img className="w-[170px] h-[170px]" alt='' src={GAME2}/>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px]">Desenvolvemos games para anunciar seus produtos e serviços, através da gamificação (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).</span>
            </div>
            <div className="flex flex-col  w-[170px] leading-[25px]">
             <img className="w-[170px] h-[170px]" alt='' src={GAME3}/>
             <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px]">Utilizando as últimas tecnologias para a criação de games, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</span>
            </div>
            <div className="flex flex-col  w-[170px] leading-[25px] mt-[130px]">
             <img className="w-[42px] h-[42px]" alt='' src={GAME}/>
             <span className="text-[20px] text-[#fff] w-[100%] font-normal mt-[16px]">Experimente inovar com a <b>PlanXP</b> Para <b>desenvolver seus jogos digitais!</b></span>
             <motion.div initial={{opacity: 1}} animate={{opacity: 0.4}}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} className="relative w-[140px] h-[auto] mt-[12px] cursor-pointer">
              <span className="text-[14px] text-[#939598] w-[100%] font-medium leading-[1.25]">ENTRE EM CONTATO AGORA MESMO</span>
              <HiArrowRight style={{transform: 'rotate(45deg)'}} className="text-[#fff] absolute bottom-[8%] right-[14%]"/>
            </motion.div>
            </div>        
          </div>
    </div>
    <div className="flex flex-col h-[auto] mt-[80px] sm:hidden z-index-[-1]">
          <div className="flex flex-col">
            <div className="w-[190px] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">02.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[55%] left-[55%] text-[28px] text-[#939598] w-[100%] font-light break-all">/O que fazemos</span>
            </div>
            <div className="flex flex-col w-[auto] mr-[17px]">
              <span className="text-[12px] text-[#fff] w-[100%] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.</span>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-[16px]">
          <div className="flex flex-col w-[170px] leading-[25px]">
              <img className="w-[170px] h-[170px]" alt='' src={GAME1}/>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px]" >A PlanXP tem uma equipe qualificada para o desenvolvimento de jogos digitais para dispositivos móveis (smartphones, tablets e afins).</span>
            </div>
            <div className="flex flex-col  w-[170px] leading-[25px]">
              <img className="w-[170px] h-[170px]" alt='' src={GAME2}/>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px]">Desenvolvemos games para anunciar seus produtos e serviços, através da gamificação (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).</span>
            </div>
          </div>
          <div className="flex flex-row justify-between  mt-[24px]">
          <div className="flex flex-col  w-[170px] leading-[25px]">
             <img className="w-[170px] h-[170px]" alt='' src={GAME3}/>
             <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px]">Utilizando as últimas tecnologias para a criação de games, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</span>
            </div>
            <div className="flex flex-col  w-[170px] leading-[25px] mt-[130px]">
             <img className="w-[42px] h-[42px]" alt='' src={GAME}/>
             <span className="text-[20px] text-[#fff] w-[100%] font-normal mt-[16px]">Experimente inovar com a <b>PlanXP</b> Para <b>desenvolver seus jogos digitais!</b></span>
             <motion.div initial={{opacity: 1}} animate={{opacity: 0.4}}   whileHover={{ opacity: 0.6, transition: { duration: 0.3 },}} className="relative w-[140px] h-[auto] mt-[12px] cursor-pointer">
              <span className="text-[14px] text-[#939598] w-[100%] font-medium leading-[1.25]">ENTRE EM CONTATO AGORA MESMO</span>
              <HiArrowRight style={{transform: 'rotate(45deg)'}} className="text-[#fff] absolute bottom-[8%] right-[14%]"/>
            </motion.div>
            </div>  
            </div>
    </div>
    </>
  )
};

export default WhatWeDo;