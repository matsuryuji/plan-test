import React from "react";
import WWA from 'assets/wwa.webp';


const WhoWeAre = () => {
  return(
    <>
    <div className="sm:flex flex-row  pl-[calc(13%+105px)] justify-between h-[100vh] hidden">
          <div className="flex flex-col mt-[245px]">
            <div className="w-[auto] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">01.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[54%] left-[54%] text-[44px] text-[#939598] w-[100%] font-light break-all">/Quem Somos</span>
            </div>
            <div className="flex flex-col w-[500px]">
              <span className="text-[12px] text-[#fff] w-[100%] font-normal">Tecnologias como a Realidade Virtual, a Realidade Aumentada, a Realidade Mixada, os vídeos 360º, os ambientes em 3D, já estão inseridos em nossas vidas, auxiliando em diversas áreas importantes, como a Educação, a Saúde e a Segurança. É a verdadeira revolução da Internet das Coisas. E a PlanXP, o braço tecnológico do Grupo Plan Marketing, está preparada para todas essas mudanças, desenvolvendo conteúdos imersivos que trazem mais dinamismo para o seu negócio</span>
            </div>
          </div>
          <img src={WWA} className="w-[100vh]" alt=""/>
    </div>
    <div className="flex flex-col h-[auto] mt-[80px] sm:hidden z-index-[-1]">
          <div className="flex flex-col w-[80vmin] ml-[24px]">
          <div className="w-[auto] relative h-[150px]">
              <span className="-z-[1] text-[106px] text-[#292929] font-bold">01.</span>
              <span style={{ transform: 'translate(-50%, -50%)' }} className="absolute top-[54%] left-[54%] text-[44px] text-[#939598] w-[100%] font-light break-all">/Quem Somos</span>
            </div>
            <div className="flex flex-col w-[auto]  pb-[16px]">
              <span className="text-[12px] text-[#fff] w-[100%] font-normal">Tecnologias como a Realidade Virtual, a Realidade Aumentada, a Realidade Mixada, os vídeos 360º, os ambientes em 3D, já estão inseridos em nossas vidas, auxiliando em diversas áreas importantes, como a Educação, a Saúde e a Segurança. É a verdadeira revolução da Internet das Coisas. E a PlanXP, o braço tecnológico do Grupo Plan Marketing, está preparada para todas essas mudanças, desenvolvendo conteúdos imersivos que trazem mais dinamismo para o seu negócio</span>
            </div>
          </div>
          <img src={WWA} className="w-[100vh]"  alt=""/>
    </div>
    </>
  )
};

export default WhoWeAre;