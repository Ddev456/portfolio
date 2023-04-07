import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { IoWarningOutline } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { TooltipComponent } from "../components/Tooltip";
import { SiTailwindcss, SiTrpc, SiPrisma, SiTypescript, SiReactquery, SiVercel, SiPostgresql } from 'react-icons/si'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { BsGit } from 'react-icons/bs'
import { GrMysql } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import { ContactModal } from "~/components/ContactModal";
import { useState } from "react";

const Home: NextPage = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>Dylan Delhalle | Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="selection:text-slate-900 selection:bg-amber-500 flex min-h-screen flex-col items-center bg-hero_pattern font-jost">
        

          <svg id="svg1" width="975" height="858" viewBox="0 0 975 858" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_203_926)">
              <ellipse cx="592" cy="586" rx="129" ry="123" fill="#EFEDF45E"/>
              </g>
              <defs>
              <filter id="filter0_f_203_926" x="0" y="0" width="1184" height="1172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="231.5" result="effect1_foregroundBlur_203_926"/>
              </filter>
              </defs>
          </svg>

          <svg id="svg3" width="846" height="843" viewBox="0 0 846 843" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_203_923)">
              <ellipse cx="637" cy="218" rx="174" ry="162" fill="#F26E0B54"/>
              </g>
              <defs>
              <filter id="filter0_f_203_923" x="0" y="-407" width="1274" height="1250" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="231.5" result="effect1_foregroundBlur_203_923"/>
              </filter>
              </defs>
          </svg>

        <ContactModal showModal={showModal} setShowModal={setShowModal}/>
        
        <div className="__content container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex sm:flex-row flex-col justify-center">
          <div className="item flex justify-center flex-wrap sm:w-3/5 p-4">
              <h1 className="font-bold text-white text-center">
              <span className="ml-2 text-[1.5rem] sm:text-[2rem]">Je suis 
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:-skew-x-5 before:bg-orange-400 relative inline-block">
                  <span className="font-extrabold relative"> Dylan Delhalle</span>
              </span>
                   , Développeur Web passionné, fan de ReactJS et de son éco-système,
                  travaille à devenir un <span className="line-through decoration-8 decoration-slate-900">bon</span> meilleur artisan du web</span>
              </h1>
              <button onClick={() => setShowModal(true)} className="h-[2rem] w-[10rem] group inline-block mt-[1rem] sm:mt-none px-1 py-1 sm:px-4 sm:py-3
                  text-sm font-semibold text-center
                  text-white uppercase transition
                  duration-200 ease-in-out bg-slate-800 
                  rounded-xl cursor-pointer
                  hover:bg-slate-900">
                  Me contacter
                  </button>
          </div>
          <div className="item relative">
            <Image className="m-auto mt-2 rounded sm:w-96 sm:h-96" alt="avatar" src="/avatar.png" width={500} height={500}/>
            <Link aria-label="Linkedin" href="https://www.linkedin.com/in/dylan-delhalle/" target="_blank">
                <span className="hover:scale-110 top-16 absolute sm:right-16 right-10 w-[3rem] h-[3rem] bg-slate-700 border-2 border-emerald-6000 rounded-full"><FaLinkedin className="text-blue-500 text-[1.5rem] ml-2.5 mt-2.5"/></span>
            </Link>
          </div>
        </div>

        
          <div className="max-w-full mt-[-5rem] flex flex-nowrap flex-col justify-evenly sm:flex-row gap-4 md:gap-8 [&:hover>div]:opacity-50 [&:hover>div]:w-[35%]">
            <div className="transition-all hover:!w-[60%] sm:w-[40%] hover:!opacity-100 group max-h-full">
                <TooltipComponent
            stack={[
            <span key={1} className="inline-block px-2 py-1
              text-sm font-semibold text-center
              text-gray-400"><TbBrandNextjs className="text-[1rem]"/>NextJS</span>
              ,<span key={2} className="inline-block px-2 py-1
              text-sm font-semibold text-center
              text-gray-400"><SiTailwindcss className="text-[1rem]"/>Tailwindcss</span>,
              <span key={3} className="inline-block px-2 py-1
              text-sm font-semibold text-center
              text-gray-400"><FaReact className="text-[1rem]"/>ReactJS</span>,
              <span key={4} className="inline-block px-2 py-1
              text-sm font-semibold text-center
              text-gray-400"><SiTrpc className="text-[1rem]"/>Trpc</span>,
              <span key={5} className="inline-block px-2 py-1
              text-sm font-semibold text-center
              text-gray-400"><SiPrisma className="text-[1rem]"/>Prisma</span>
              ]}>
              <div className="item flex flex-col gap-4 rounded-xl transition-colors transparent p-4 bg-white/10 p-4 text-white hover:bg-white/20 cursor-auto min-h-[16rem]"
              >
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">Carnet Potager</h3>
                    <Link aria-label="Github" className="hover:opacity-100 opacity-75" href="https://github.com/Ddev456/carnet" target="_blank">
                          <FaGithub className="text-[2rem]"/>
                    </Link>
                </div>

                <div className="flex justify-around">

                </div>
                <span className="flex items-center justify-center text-red-700 text-lg font-semibold">
                  <IoWarningOutline className="text-red-700"/>Projet en cours de développement ..
                </span>
              <div className="text-lg">
                
                {/* <Image className="ml-auto mr-auto hidden group-hover:block" alt="extrait" src="/Animation.gif" width={250} height={250} /> */}
                
                <p  className="group-hover:hidden">Application web de gestion du potager</p>
              </div>
              <div className="flex justify-around">
                  <Link className="group inline-block px-4 py-3
                  text-sm font-semibold text-center
                  text-white uppercase transition
                  duration-200 ease-in-out bg-indigo-600 
                  rounded-md cursor-pointer
                  hover:bg-indigo-700" href="https://carnetpotager.fr" target="_blank">
                  <span className="flex items-center"> En savoir plus
                    <MdOutlineKeyboardDoubleArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[2rem]"/>
                  </span>
                  </Link>
              </div>
            </div>
                </TooltipComponent>
            </div>
            <div className="transition-all hover:!w-[60%] sm:w-[40%] hover:!opacity-100 group">
            <TooltipComponent 
            stack={[
          <span key={1} className="inline-block px-2 py-1
            text-sm font-semibold text-center
            text-gray-400"><TbBrandNextjs className="text-[1rem]"/>NextJS</span>
            ,<span key={2} className="inline-block px-2 py-1
            text-sm font-semibold text-center
            text-gray-400"><SiTailwindcss className="text-[1rem]"/>Tailwindcss</span>,
            <span key={3} className="inline-block px-2 py-1
            text-sm font-semibold text-center
            text-gray-400"><FaReact className="text-[1rem]"/>ReactJS</span>
            ]}>
            <div className="item flex justify-between flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 p-4 cursor-auto min-h-[16rem]"
            >
              <div className="flex justify-between">
                  <h3 className="text-2xl font-bold">ATable</h3>
                  <Link aria-label="Github" className="hover:opacity-100 opacity-75" href="https://github.com/Ddev456/atable" target="_blank">
                    <FaGithub className="text-[2rem]"/>
                  </Link>
              </div>
              <div className="text-lg">
                
                {/* <Image className="ml-auto mr-auto hidden group-hover:block" alt="extrait" src="/atable.png" width={250} height={250} /> */}
                
                <p className="group-hover:hidden">Générateur de recettes aléatoires</p>
              </div>
              <div className="flex justify-around">
                  <Link className="group inline-block px-4 py-3
                  text-sm font-semibold text-center
                  text-white uppercase transition
                  duration-200 ease-in-out bg-indigo-600 
                  rounded-md cursor-pointer
                  hover:bg-indigo-700" href="https://atable-pi.vercel.app" target="_blank">
                  <span className="flex items-center"> En savoir plus
                    <MdOutlineKeyboardDoubleArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[2rem]"/>
                  </span>
                  </Link>
              </div>
            </div>
            </TooltipComponent>
            </div>
          </div>

            <div className="bottom-10 sm:w-[56rem] bg-white/10 p-4 text-white rounded-xl text-white p-3 text-semibold">
          <h3 className="font-extrabold text-white text-center">Ma boîte à outils</h3>
              <ul className="flex flex-row flex-wrap justify-between">
                <li> <SiTypescript /> Typescript</li>
                <li><FaReact /> ReactJS</li>
                <li><SiReactquery />React-Query</li>
                <li><SiTrpc />Trpc</li>
                <li> <SiTailwindcss /> TailwindCSS</li>
                <li><GrMysql /> Mysql</li> 
                <li><SiPostgresql /> Postgresql</li>
                <li><TbBrandNextjs /> NextJS</li>
                <li><BsGit />Git</li>
                <li><AiFillGithub />Github</li>
                <li><SiVercel />Vercel</li>
              </ul>
            </div>
        
        </div>
      </main>
    </>
  );
};

export default Home;
