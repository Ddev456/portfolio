import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center">

        <div className="__content container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex sm:flex-row flex-col justify-center">
              <h1 className="font-bold text-white text-center">
              <span className="ml-2 text-[1.5rem] sm:text-[2rem]">Je suis 
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:-skew-x-5 before:bg-orange-400 relative inline-block">
                  <span className="font-extrabold relative"> Dylan Delhalle</span>
              </span>
                   , Développeur Web passionné, fan de ReactJS et de son éco-système,
                  travaille à devenir un <span className="line-through decoration-8 decoration-slate-900">bon</span> meilleur artisan du web</span>
              </h1>
              <button className="h-[2rem] w-[10rem] group inline-block mt-[1rem] sm:mt-none px-1 py-1 sm:px-4 sm:py-3
                  text-sm font-semibold text-center
                  text-white uppercase transition
                  duration-200 ease-in-out bg-slate-800 
                  rounded-xl cursor-pointer
                  hover:bg-slate-900">
                  Me contacter
                  </button>
          </div>
         <Image src="/avatar.png" width="350" height="350" alt="profile" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Carnet Potager →</h3>
              <div className="text-lg">
              Application web de gestion de son potager. Mon plus gros projet sur lequel je travaille activement.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">A Table →</h3>
              <div className="text-lg">
                Génération aléatoire de recettes | TheMealDb API
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Projet 3 →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="hover:w-full hover:h-full flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Projet 4 →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
