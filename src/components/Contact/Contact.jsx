
import React from "react";
import RECAPTCHA from "assets/recaptcha.png";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import PLAN  from "assets/logo-plan.png";
import PLANXP  from "assets/logo-planxp.png";
import FULLUP  from "assets/logo-fullup.png";


const Contact = () => {

  return(
    <>
    <div className="sm:flex flex-row h-[100vh] mt-[245px] hidden">
      <div className="flex flex-col">
      <div className="w-[300px] relative h-[auto] leading-[24px]">
        <span className="-z-[1] text-[106px] text-[#292929] font-bold">
          05.
        </span>
        <span
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-[20%] left-[53%] text-[44px] text-[#939598] w-[100%] font-light break-normal"
        >
          /Contato
        </span>
      </div>
      <div className="flex flex-col w-[612px]">
        <span className="text-[14px] text-[#fff] w-[100%] font-normal">Gostou de saber mais sobre as inovacões tecnológicas e também quer oferecer novas
        experiências aos seus clientes? Então entre em contato e marque um encontro real conosco
        para conversamos sobre as infinitas possibilidades do mundo virtual.</span>
        <div className="flex flex-col mt-[36px] w-[100%]">
          <div className="flex flex-col relative">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">Nome:</span>
            <input className="w-[100%] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[31px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
          </div>
          <div className="flex flex-row w-[612px] justify-between mt-[18px]">
          <div className="flex flex-col relative">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">E-mail:</span>
            <input className="w-[299px] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[31px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
          </div>
          <div className="flex flex-col relative ml-[14px]">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">Telefone:</span>
            <input className="w-[299px] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[31px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
          </div>
          </div>
          <div className="flex flex-col relative mt-[18px]">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">Mensagem:</span>
            <input className="w-[100%] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[114px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
            {/* <reCAPTCHA ref={recaptchaRef}  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/> */}
            <img alt="" className="w-[298px] h-[72px] mt-[32px]" src={RECAPTCHA}/>
          </div>
          <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-normal font-medium ">
                ENVIAR
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[7%] left-[45px]"
                />
              </motion.div>
        </div>
      </div>
      </div>
      <div className="flex flex-col ml-[126px]">
        <div className="flex flex-row gap-[24px]">
          <div className="flex flex-col w-[187px]">
            <span span className="text-[20px] text-[#939598] w-[100%] font-normal">Siga-nos</span>
            <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</span>
            <div className="flex flex-row gap-[20px]">
              <a href="https://www.facebook.com/planmkt" className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
              <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
              <ImFacebook/>
              </div>
              </a>
              <a href="https://www.instagram.com/planmkt/" className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
              <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
                <FaInstagram/>
              </div>
              </a>
              <a href="https://www.youtube.com/planmkt" className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
              <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
              <ImYoutube/>
              </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[187px]">
            <div className="flex flex-row items-center">
              <div className="text-[#939598] w-[16px] h-[16px] ">
              <MdLocationOn/>
              </div>
            <span span className="text-[20px] text-[#939598] w-[100%] font-normal">/RS</span>
            </div>
            <div className="flex flex-col mt-[24px] mb-[16px]">
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">Rua Onze de Junho, 243</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">Novo Hamburgo/RS</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">Brasil</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">+55 51 98229.0400</span>
            </div>
            <div className="flex">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <a href="https://www.google.com/maps/place/R.+Onze+de+Junho,+243+-+Oper%C3%A1rio,+Novo+Hamburgo+-+RS,+93315-130/@-29.6796239,-51.1356049,17z/data=!3m1!4b1!4m5!3m4!1s0x951943a1494f1ae7:0xc94882b9d1df84">
                <span className="text-[14px] text-[#939598] break-normal font-medium ">
                VER NO GOOGLE MAPS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[7%] right-[-11%]"
                />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col w-[187px]">
            <div className="flex flex-row items-center">
              <div className="text-[#939598] w-[16px] h-[16px] ">
              <MdLocationOn/>
              </div>
            <span span className="text-[20px] text-[#939598] w-[100%] font-normal">/SP</span>
            </div>
            <div className="flex flex-col mt-[24px] mb-[16px]">
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">Rua Ibijaú, 355/Sala 1309</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">São Paulo/SP</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">Brasil</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal">+55 11 98871.8556</span>
            </div>
            <div className="flex">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                 <a href="https://www.google.com/maps/place/Av.+Ibija%C3%BA,+355+-+1309+-+Indian%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+04524-020/@-23.6056085,-46.6661242,17.5z/data=!4m5!3m4!1s0x94ce5a05f01ecd4f:0x5046a2620">
                <span className="text-[14px] text-[#939598] break-normal font-medium ">
                VER NO GOOGLE MAPS
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[7%] right-[-11%]"
                />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-[62px] gap-[24px]">
          <div className="flex flex-col w-[187px]">
              <div className="flex flex-row ">
                <img src={PLAN} alt="" className="w-[115px] h-[66px]"/>
              </div>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.2</span>
              <div className="flex">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <a href="https://www.planmkt.com.br/">
                  <span className="text-[14px] text-[#939598] break-normal font-medium ">
                  CONHEÇA
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[7%] right-[-16px]"
                  />
                  </a>
                </motion.div>
              </div>
          </div>
          <div className="flex flex-col w-[187px]">
              <div className="flex flex-row ">
                <img src={PLANXP} alt="" className="w-[115px] h-[66px]"/>
              </div>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.</span>
              <div className="flex">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <a href="https://www.planmkt.com.br/planxp">
                  <span className="text-[14px] text-[#939598] break-normal font-medium ">
                  CONHEÇA
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[7%] right-[-16px]"
                  />
                  </a>
                </motion.div>
              </div>
          </div>
          <div className="flex flex-col w-[187px]">
              <div className="flex flex-row ">
                <img src={FULLUP} alt="" className="w-[115px] h-[66px]"/>
              </div>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">A FullUp é uma agência especializada em branding design e campanhas.</span>
              <div className="flex">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <a href="https://www.planmkt.com.br/fullup">
                  <span className="text-[14px] text-[#939598] break-normal font-medium ">
                  CONHEÇA
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[7%] right-[-16px]"
                  />
                  </a>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col h-[auto] pt-[80px] sm:hidden z-index-[-1]">
          <div className="flex flex-col">
            <div className="w-[190px] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">05.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[55%] left-[58%] text-[28px] text-[#939598] w-[100%] font-light break-all">/Contatos</span>
            </div>
          <div className="flex flex-col w-[auto] mr-[17px]">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[240px] h-[auto]  cursor-pointer"
              >
                <span className="text-[12px] text-[#939598] break-all font-medium ">
                QUER TRABALHAR COM A GENTE?
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[5%] right-[8%]"
                />
              </motion.div>
          </div>
            <span className="text-[14px] text-[#fff] w-[100%] font-normal">Gostou de saber mais sobre as inovacões tecnológicas e também quer oferecer novas
            experiências aos seus clientes? Então entre em contato e marque um encontro real conosco
            para conversamos sobre as infinitas possibilidades do mundo virtual.</span>
          </div>
        <div className="flex flex-col w-[auto]">
        <div className="flex flex-col mt-[36px] w-[100%]">
          <div className="flex flex-col relative">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">Nome:</span>
            <input className="w-[100%] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[31px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
          </div>
          <div className="flex flex-col relative my-[24px]">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">E-mail:</span>
            <input className="w-[100%] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[31px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
          </div>
          <div className="flex flex-col relative">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">Telefone:</span>
            <input className="w-[100%] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[31px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
          </div>
          <div className="flex flex-col relative mt-[24px] ">
            <span className="text-[#fff] mb-[4px] text-[16px] font-medium">Mensagem:</span>
            <input className="w-[100%] bg-[#1e1e1e] border border-[#939598] text-[#fff] h-[114px]"/>
            <div style={{transform: 'rotate(45deg)'}} className="border-b-[1px] border-[#939598] absolute top-[12px] right-[-11px] bg-[#1E1E1E] w-[17px] h-[27px]"/>
            {/* <reCAPTCHA ref={recaptchaRef}  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/> */}
            <img alt="" className="w-[298px] h-[72px] mt-[32px]" src={RECAPTCHA}/>
          </div>
          <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
              className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
              >
                <span className="text-[14px] text-[#939598] break-normal font-medium ">
                ENVIAR
                </span>
                <HiArrowRight
                  style={{ transform: "rotate(45deg)" }}
                  className="text-[#fff] absolute bottom-[7%] left-[50px]"
                />
          </motion.div>
        </div>
        <div className="flex flex-col mt-[20px]">
          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-col w-[187px] justify-between">
              <span span className="text-[20px] text-[#939598] w-[100%] font-normal">Siga-nos</span>
              <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</span>
              <div className="flex flex-row gap-[20px]">
                <a href="https://www.facebook.com/planmkt" className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
                <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
                <ImFacebook/>
                </div>
                </a>
                <a href="https://www.instagram.com/planmkt/" className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
                <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
                  <FaInstagram/>
                </div>
                </a>
                <a href="https://www.youtube.com/planmkt" className="bg-[#939598] rounded-full w-[40px] h-[40px] relative">
                <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[50%] left-[50%] text-[22px]">
                <ImYoutube/>
                </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[187px]  justify-between">
              <div className="flex flex-row items-center">
                <div className="text-[#939598] w-[16px] h-[16px] ">
                <MdLocationOn/>
                </div>
              <span span className="text-[20px] text-[#939598] w-[100%] font-normal">/RS</span>
              </div>
              <div className="flex flex-col mt-[24px] mb-[16px]">
                <span className="text-[13px] text-[#fff] w-[100%] font-normal">Rua Onze de Junho, 243</span>
                <span className="text-[13px] text-[#fff] w-[100%] font-normal">Novo Hamburgo/RS</span>
                <span className="text-[13px] text-[#fff] w-[100%] font-normal">Brasil</span>
                <span className="text-[13px] text-[#fff] w-[100%] font-normal">+55 51 98229.0400</span>
              </div>
              <div className="flex">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                >
                  <a href="https://www.google.com/maps/place/R.+Onze+de+Junho,+243+-+Oper%C3%A1rio,+Novo+Hamburgo+-+RS,+93315-130/@-29.6796239,-51.1356049,17z/data=!3m1!4b1!4m5!3m4!1s0x951943a1494f1ae7:0xc94882b9d1df84">
                  <span className="text-[14px] text-[#939598] break-normal font-medium ">
                  VER NO GOOGLE MAPS
                  </span>
                  <HiArrowRight
                    style={{ transform: "rotate(45deg)" }}
                    className="text-[#fff] absolute bottom-[7%] right-[-11%]"
                  />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-[62px] gap-[30px]">
            <div className="flex flex-col w-[187px]  justify-between">
  <div className="flex flex-row items-center">
    <div className="text-[#939598] w-[16px] h-[16px] ">
    <MdLocationOn/>
    </div>
  <span span className="text-[20px] text-[#939598] w-[100%] font-normal">/SP</span>
  </div>
  <div className="flex flex-col mt-[24px] mb-[16px]">
    <span className="text-[13px] text-[#fff] w-[100%] font-normal">Rua Ibijaú, 355/Sala 1309</span>
    <span className="text-[13px] text-[#fff] w-[100%] font-normal">São Paulo/SP</span>
    <span className="text-[13px] text-[#fff] w-[100%] font-normal">Brasil</span>
    <span className="text-[13px] text-[#fff] w-[100%] font-normal">+55 11 98871.8556</span>
  </div>
  <div className="flex">
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0.8 }}
    whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
    className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
    >
      <a href="https://www.google.com/maps/place/Av.+Ibija%C3%BA,+355+-+1309+-+Indian%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+04524-020/@-23.6056085,-46.6661242,17.5z/data=!4m5!3m4!1s0x94ce5a05f01ecd4f:0x5046a2620">
      <span className="text-[14px] text-[#939598] break-normal font-medium ">
      VER NO GOOGLE MAPS
      </span>
      <HiArrowRight
        style={{ transform: "rotate(45deg)" }}
        className="text-[#fff] absolute bottom-[7%] right-[-11%]"
      />
      </a>
    </motion.div>
  </div>
            </div> 
            <div className="flex flex-col w-[187px]  justify-between">
                <div className="flex flex-row ">
                  <img src={PLAN} alt="" className="w-[115px] h-[66px]"/>
                </div>
                <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.2</span>
                <div className="flex">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                  className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                  >
                    <a href="https://www.planmkt.com.br/">
                    <span className="text-[14px] text-[#939598] break-normal font-medium ">
                    CONHEÇA
                    </span>
                    <HiArrowRight
                      style={{ transform: "rotate(45deg)" }}
                      className="text-[#fff] absolute bottom-[7%] right-[-16px]"
                    />
                    </a>
                  </motion.div>
                </div>
            </div>
          </div>
          <div className="flex flex-row mt-[62px] gap-[30px] mb-[40px]">
            <div className="flex flex-col w-[187px]  justify-between">
                  <div className="flex flex-row ">
                    <img src={PLANXP} alt="" className="w-[115px] h-[66px]"/>
                  </div>
                  <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.</span>
                  <div className="flex">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                    className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                    >
                      <a href="https://www.planmkt.com.br/planxp">
                      <span className="text-[14px] text-[#939598] break-normal font-medium ">
                      CONHEÇA
                      </span>
                      <HiArrowRight
                        style={{ transform: "rotate(45deg)" }}
                        className="text-[#fff] absolute bottom-[7%] right-[-16px]"
                      />
                      </a>
                    </motion.div>
                  </div>
            </div>
            <div className="flex flex-col w-[187px]  justify-between">
                <div className="flex flex-row ">
                  <img src={FULLUP} alt="" className="w-[115px] h-[66px]"/>
                </div>
                <span className="text-[13px] text-[#fff] w-[100%] font-normal my-[24px]">A FullUp é uma agência especializada em branding design e campanhas.</span>
                <div className="flex">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.4, transition: { duration: 0.3 } }}
                  className="relative w-[auto] h-[auto] mt-[18px] cursor-pointer"
                  >
                    <a href="https://www.planmkt.com.br/fullup">
                    <span className="text-[14px] text-[#939598] break-normal font-medium ">
                    CONHEÇA
                    </span>
                    <HiArrowRight
                      style={{ transform: "rotate(45deg)" }}
                      className="text-[#fff] absolute bottom-[7%] right-[-16px]"
                    />
                    </a>
                  </motion.div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default Contact;