import React from "react";
import SKA from "assets/ska.webp";
import LOGO_GAME from "assets/logo-game.webp";
import KILLING from "assets/tintas-killing.webp";
import AROMATIC from "assets/aromatic.webp";
import LOREM from "assets/lorem.webp";
import IPSUM from "assets/ipsum.webp";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const Cases = () => {
  return (
    <>
      <div  className="sm:flex flex-row h-[100vh] mt-[245px] hidden">
        <div className="flex flex-col">
          <div className="flex flex-row">
          <div className="w-[300px] relative h-[auto] leading-[24px]">
            <span className="-z-[1] text-[106px] text-[#292929] font-bold">
              03.
            </span>
            <span
              style={{ transform: "translate(-50%, -50%)" }}
              className="absolute bottom-[67%] left-[52%] text-[16px] text-[#fff] w-[100%] font-light"
            >
              /Plan news
            </span>
            <span
              style={{ transform: "translate(-50%, -50%)" }}
              className="absolute top-[45%] left-[52%] text-[44px] text-[#939598] w-[100%] font-light break-normal"
            >
              /Cases Games
            </span>
          </div>
          <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 0.6, transition: { duration: 0.3 } }}
              className="relative w-[200px] h-[auto] mt-[18px] ml-[32px] cursor-pointer"
            >
              <span className="text-[10px] text-[#939598] break-normal font-medium ">
              CLIOUE AQUI PARA VER TODO O BLOG
              </span>
              <HiArrowRight
                style={{ transform: "rotate(45deg)" }}
                className="text-[#fff] absolute bottom-[42%] right-[-4%]"
              />
            </motion.div>
          </div>
          
          <div className="flex flex-col mt-[50px]">
          <div className="flex flex-row gap-[20px]">
          <div className="flex flex-col w-[274px] h-[447px] bg-[#292929] leading-[25px]">
            <div className="relative">
              <img className="w-[274px] h-[164px] " alt="" src={SKA} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">SKA</span>
              </div>
              <span className="text-[22px] text-[#939598] w-[100%] font-light mt-[16px]">Plan cria o novo site da SKA</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[27%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-[274px] h-[447px] bg-[#292929] leading-[25px]">
            <div className="relative">
              <img className="w-[274px] h-[164px] " alt="" src={KILLING} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500] break-normal ">TINTAS KILLING</span>
              </div>
              <span className="text-[22px] text-[#939598] w-[100%] font-light mt-[16px] break-all pr-[14px]">Plan cria o novo site para a Tintas Killing</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[27%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-[274px] h-[447px] bg-[#292929] leading-[25px]">
            <div className="relative">
              <img className="w-[274px] h-[164px] " alt="" src={LOREM} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px] ">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500] break-normal ">CARGO BR</span>
              </div>
              <span className="text-[22px] text-[#939598] w-[100%] font-light mt-[16px] break-all pr-[14px]">Estamos desenvolvendo o novo site da CargoBR</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[27%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-[274px] h-[447px] bg-[#292929] leading-[25px]">
            <div className="relative">
              <img className="w-[274px] h-[164px] " alt="" src={IPSUM} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500] ">XALINGO</span>
              </div>
              <span className="text-[22px] text-[#939598] w-[100%] font-light mt-[16px] break-all pr-[14px]">Clubinho Xalingo com novidades</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[27%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-[274px] h-[447px] bg-[#292929] leading-[25px]">
            <div className="relative">
              <img className="w-[274px] h-[164px] " alt="" src={AROMATIC} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">AROMATIC</span>
              </div>
              <span className="text-[22px] text-[#939598] w-[100%] font-light mt-[16px] break-all pr-[14px]">Novo site da Aromatic no ar</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[27%]"
                />
              </motion.div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[auto] pt-[80px] sm:hidden z-index-[-1]">
          <div className="flex flex-col">
            <div className="w-[190px] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">03.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[55%] left-[58%] text-[28px] text-[#939598] w-[100%] font-light break-all">/Plan news</span>
            </div>
            <div className="flex flex-col w-[auto] mr-[17px]">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[240px] h-[auto]  cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-all font-medium ">
                CLIOUE AQUI PARA VER TODO O BLOG
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[5%] right-[-2%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-[16px]">
          <div className="flex flex-col w-[170px]  w-[274px] h-[auto] bg-[#292929]  leading-[25px]">
            <div className="relative">
              <img className="w-[176px] h-[145px] " alt="" src={SKA} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">SKA</span>
              </div>
              <span className="text-[17px] text-[#939598] w-[100%] font-light mt-[16px] pr-[14px]">Plan cria o novo site da SKA</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[45%]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-[170px]  w-[274px] h-[auto] bg-[#292929]  leading-[25px]">
            <div className="relative">
              <img className="w-[176px] h-[145px] " alt="" src={KILLING} />
              <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
              <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">TINTAS KILLING</span>
              </div>
              <span className="text-[17px] text-[#939598] w-[100%] font-light mt-[16px] pr-[14px]">Plan cria o novo site para a Tintas Killing</span>
              <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
              </span>
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                SAIBA MAIS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[14%] left-[45%]"
                />
              </motion.div>
            </div>
          </div>
          </div>
          <div className="flex flex-row justify-between  mt-[24px]">
            <div className="flex flex-col w-[170px]  w-[274px] h-[auto] bg-[#292929]  leading-[25px]">
              <div className="relative">
                <img className="w-[176px] h-[145px] " alt="" src={LOREM} />
                <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
                <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
              </div>
              <div className="flex flex-col ml-[20px] mt-[20px]">
                <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                  <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">CARGO BR</span>
                </div>
                <span className="text-[17px] text-[#939598] w-[100%] font-light mt-[16px] pr-[14px]">Estamos desenvolvendo o novo site da CargoBR</span>
                <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
                </span>
                <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <span className="text-[12px] text-[#939598] break-normal font-medium ">
                  SAIBA MAIS
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[14%] left-[45%]"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col w-[170px]  w-[274px] h-[auto] bg-[#292929]  leading-[25px]">
              <div className="relative">
                <img className="w-[176px] h-[145px] " alt="" src={IPSUM} />
                <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
                <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
              </div>
              <div className="flex flex-col ml-[20px] mt-[20px]">
                <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                  <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">XALINGO</span>
                </div>
                <span className="text-[17px] text-[#939598] w-[100%] font-light mt-[16px] pr-[14px]">Clubinho Xalingo com novidades</span>
                <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
                </span>
                <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <span className="text-[12px] text-[#939598] break-normal font-medium ">
                  SAIBA MAIS
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[14%] left-[45%]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between  mt-[24px]">
            <div className="flex flex-col w-[170px]  w-[274px] h-[auto] bg-[#292929]  leading-[25px]">
              <div className="relative">
                <img className="w-[176px] h-[145px] " alt="" src={AROMATIC} />
                <div style={{ top: '0', right: '0', width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 60px 60px 0", borderColor: "transparent #1e1e1e transparent transparent", transform: "rotate(0deg)"}} className="absolute"/>
                <img className="w-[25px] h-[25px] absolute top-[0] right-[0]" alt="" src={LOGO_GAME} />
              </div>
              <div className="flex flex-col ml-[20px] mt-[20px]">
                <div className="bg-[#939598]  flex items-center justify-center w-max h-[18px]">
                  <span className="text-[#1E1E1E] mx-[6px] text-[12px] font-[500]">AROMATIC</span>
                </div>
                <span className="text-[17px] text-[#939598] w-[100%] font-light mt-[16px] pr-[14px]">Novo site da Aromatic no ar</span>
                <span className="text-[14px] text-[#fff] w-[100%] font-normal mt-[16px] pr-[14px] break-all	">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac urna a ligula lobortis fermentum. Class aptent taciti sociosqu ad litora torquent...
                </span>
                <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <span className="text-[12px] text-[#939598] break-normal font-medium ">
                  SAIBA MAIS
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[14%] left-[45%]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Cases;
