import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub,AiFillHtml5, AiFillFacebook} from 'react-icons/ai'
import {FaCss3Alt, FaReact, FaPython , FaGithub, FaNodeJs} from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5"
import { SiArduino, SiMysql, SiRottentomatoes } from "react-icons/si";
import Image from 'next/image'
import nica from '../src/img/nica1.png'
import simon from '../src/img/telasimon.png';
import cities from '../src/img/telacities.png';
import credit from '../src/img/telacredit.png';
import movies from '../src/img/telamovies.png';
import python from '../src/img/python.png';
import { ContactUs } from '../src/components/Contact'; 
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";


import React, { useState } from 'react';


export default function Home() {

const [darkMode, setDarkMode] = useState(false);

const settings = {
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}


  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title className='titulo'>Marcelo Nicacio</title>
        <meta name="description" content="Portfolio Marcelo Nicacio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='min-h-screen layout dark:bg-gray-700'>
          <nav className='py-10 mb-20 flex justify-end'>
            <ul className='flex items-center px-10 md:px-20 lg:px-40 '>
              <li >
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl scale-x-[-1] dark:text-yellow-400'/>
              </li>
              <li><a className='bg-black dark:bg-gray-800 dark:text-gray-200 text-white text-sm shadow-md px-3 py-2 ml-8 font-semibold' href="#contact">CONTACT</a></li>
            </ul>
          </nav>
          
            <div className='flex flex-col justify-center mt-40 items-center h-96'>
              <div>
                  <h2 className='text-4xl font-extrabold md:text-6xl xl:text-7xl text-white drop-shadow-sm shadow-black/50'><span className='amarelo shadow-lg text-black px-5 dark:text-black'>MARCELO NICACIO</span></h2>
              </div>
              <h3 className='text:xl lg:text-2xl my-4 dark:text-gray-200 font-semibold'>Desenvolvedor Front-End</h3>
              <div className=' text-4xl flex justify-center gap-16 py-5 text-white  dark:text-white'>
            <span>
              <AiFillLinkedin className='cursor-pointer hover:text-black'/><a href="https://www.linkedin.com/in/marcelo-nicacio/"></a>
            </span>
            <span>
              <AiFillGithub className='cursor-pointer hover:text-black' /><a href="https://github.com/marcelonicacio "></a>
            </span>
            <span>
              <AiFillTwitterCircle className='cursor-pointer hover:text-black' /><a href="https://twitter.com/marcezica"></a>
            </span>
           
          </div>
            </div>
            
        </section>
        <section className='min-h-screen bg-white dark:bg-gray-600 md:flex justify-between' >

          <div className=' bg-gray-400 md:w-1/4 dark:bg-gray-800 flex flex-col items-center justify-center'>
            <div>
              <h3 className='text-3xl text-white text-shadow-md font-bold text-center'>Marcelo Nicacio</h3>
              <p className='text-sm md:mb-5 md:py-2 text-gray-700 font-semibold  dark:text-gray-200 leading-8'>Developer Front-end based in Porto, Portugal.</p>
             
            </div>
          
            <div className='pb-2'>
              <Image className='md:w-72 w-48 md:h-72 h-48 shadow-md rounded-full' src={nica} alt={'foto marcelo'}/>
            </div>
            
          </div> 
          <div className='md:w-3/4 flex md:px-60 flex-col md:p-20 p-10 justify-center items-center'>
            <Reveal>
              <div className='md:text-lg text-sm border-black border-2 py-1 px-2 shadow-lg dark:text-white dark:border-white font-semibold mb-5 '>ABOUT ME</div>
                        <p className='dark:text-gray-200 text-gray-800 md:text-md mx-auto mb-1 '>Brazilian, vivo na cidade do Porto, Portugal ?? 3 anos, e sou formado em Marketing. </p>
                        <p className='dark:text-gray-200 text-gray-800 md:text-md mx-auto mb-1'>Estudo front end h?? alguns anos e tenho um pouco de conhecimento em back-end, al??m disso me interesso por games, rob??tica e deep learning.</p>
            </Reveal>
            <Reveal>
          <h4 className='md:text-5xl text-3xl m-10 font-extrabold dark:text-white' >Skills</h4>
     
                <ul className='md:text-6xl text-4xl  grid grid-cols-3 gap-10'>
                  <li alt='HTML'><AiFillHtml5 className='text-orange-600' name={'HTML'} alt={'HTML'}/></li>
                  <li><FaCss3Alt className='text-blue-500'/></li>
                  <li><IoLogoJavascript className='text-yellow-400'/></li>
                  <li><FaReact className='text-sky-700 '/></li>
                  <li><FaNodeJs className='text-lime-600'/></li>
                  <li><Image src={python} className='md:h-16 h-10 w-10 md:w-16'/></li>
                  <li><FaGithub className='dark:text-white'/></li>
                  <li><SiArduino className='text-teal-500'/></li>
                  <li><SiMysql className='dark:text-white'/></li>
                </ul>
              </Reveal>
            </div>

  </section>
  <section className='min-h-screen  dark:bg-gray-700 layout px-10 md:px-20 lg:px-40 '>

    <Reveal>
   
      <div className='py-20 flex'><h2 className='text-2xl shadow-md text-white font-semibold px-3 py-2 border-2 '>PROJECTS</h2></div>
       <div className='' >
       <Slider className='pt-20 pl-10' {...settings}>
          <div className='duration-500 max-w-xs group-hover:scale-[0.95] hover:!scale-100 dark:bg-gray-800 flex flex-col justify-between text-start text-sm overflow-hidden bg-gray-200 h-96 shadow-xl'>
                <div className='max-w-md'>
                  <Image className='object-cover p-2 cursor-pointer' src={cities} alt={'imagem projeto rocket card'} />
                </div>
                <h3 className='text-lg font-medium px-5 p-2 dark:text-gray-200'>Clima Cidades</h3>
                <p className='p-2 px-5 dark:text-gray-200  text-gray-700'>Credit card project with Regular expression to identify the card company.</p>
                <h4 className='p-2 text-gray-700 font-semibold dark:text-gray-200'>Technologies used...</h4>
                <div className='flex justify-around gap-1 items-center p-2' >
                 <span className='bg-blue-500 text-xs rounded-xl px-2 text-white'>CSS</span><span className='bg-yellow-400 text-xs rounded-xl px-2 text-white'>JavaScript</span>
                 <span className='bg-gray-700 text-xs px-2 text-white cursor-pointer'>View More!</span>
                </div>
      
              </div>

            
              <div className='hover:!scale-100 duration-500 group-hover:scale-[0.95] flex flex-col justify-between text-start text-sm overflow-hidden max-w-xs h-96 bg-gray-200 shadow-md dark:bg-gray-800'>
                <div className='max-w-md '>
                  <Image className='object-cover p-2 cursor-pointer' src={simon} alt={'imagem projeto simon'} />
                </div>
                <h3 className='text-lg px-5 font-medium p-2 dark:text-gray-200'>Simon Says!</h3>
                <p className=' text-gray-700 dark:text-gray-200 px-5'>This project simula the classic toy Simon, the game have the same nostalgic colors and sounds.
                </p>
                <h4 className='px-2 pt-2 text-gray-700 font-semibold dark:text-gray-200'>Technologies used...</h4>
                <div className='flex justify-between gap-1 items-center p-2' >
                 <span className='bg-orange-500 text-semibold text-xs rounded-xl px-2 text-white'>HTML</span><span className='bg-blue-500 text-semibold text-xs rounded-xl px-2 text-white'>CSS</span><span className='bg-yellow-400 text-semibold text-xs rounded-xl px-2 text-white'>JavaScript</span>
                 <span className='bg-gray-700 text-xs px-2 text-white cursor-pointer'>View More!</span>
                </div>
      
              </div>
      
              <div className='mb-20 duration-500 group-hover:scale-[0.95] hover:!scale-100 dark:bg-gray-800 flex flex-col justify-between text-start text-sm overflow-hidden max-w-xs h-96 bg-gray-200 shadow-xl'>
                <div className='max-w-md'>
                  <Image className='object-cover p-2 cursor-pointer' src={credit} alt={'imagem projeto rocket card'} />
                </div>
                <h3 className='text-lg font-medium px-5 p-2 dark:text-gray-200'>Rocket Card</h3>
                <p className='p-2 px-5 dark:text-gray-200  text-gray-700'>Credit card project with Regular expression to identify the card company.</p>
                <h4 className='p-2 text-gray-700 font-semibold dark:text-gray-200'>Technologies used...</h4>
                <div className='flex justify-around gap-1 items-center p-2' >
                 <span className='bg-blue-500 text-xs rounded-xl px-2 text-white'>CSS</span><span className='bg-blue-700 text-xs rounded-xl px-2 text-white'>React JS</span><span className='bg-yellow-400 text-xs rounded-xl px-2 text-white'>JavaScript</span>
                 <span className='bg-gray-700 text-xs px-2 text-white cursor-pointer'>View More!</span>
                </div>
      
              </div>
              
              <div className='duration-500 max-w-xs group-hover:scale-[0.95] hover:!scale-100 dark:bg-gray-800 flex flex-col justify-between text-start text-sm overflow-hidden h-96 bg-gray-100 shadow-xl'>
                <div className='max-w-md'>
                  <Image className='object-contain p-2 cursor-pointer w-96 border-gray-400' src={movies} alt={'imagem projeto movies'} />
                </div>
                <h3 className='text-lg font-medium p-2 dark:text-gray-200'>Best Movies IMDB</h3>
                <p className='p-2 dark:text-gray-200  text-gray-700'>This project show the best movies order list on Imdb and description about each movie.</p>
                <h4 className='p-2 text-gray-700 font-semibold dark:text-gray-200'>Technologies used...</h4>
                <div className='flex justify-around gap-1 items-center p-2' >
                 <span className='bg-blue-700 text-xs rounded-xl px-2 text-white'>React JS</span><span className='bg-blue-500 text-xs rounded-xl px-2 text-white'>CSS</span><span className='bg-yellow-400 text-xs rounded-xl px-2 text-white'>JavaScript</span>
                 <span className='bg-gray-700 text-xs px-2 text-white cursor-pointer'>View More!</span>
                </div>
                
              </div>
              </Slider>
            </div>
    </Reveal>
        </section> 
        <section className='min-h-screen layout flex flex-col justify-between dark:bg-gray-700  '>

          <div className=' flex md:flex-row flex-col md:justify-around items-center z-10'>
            <div className='pt-60'>
              <Reveal>
                <h2 className='text-white font-semibold mt-30 mb-10'><span className='border-2 px-3 py-2 shadow-md border-white'>CONTACT</span></h2>
                <h3 className='text-7xl font-bold dark:text-white'>Let's talk</h3>
                <div className=' text-4xl flex justify-center gap-16 py-5 text-white  dark:text-gray-900'>
                            <AiFillLinkedin className='cursor-pointer hover:text-black'/>
                            <AiFillFacebook className='cursor-pointer hover:text-black' />
                            <AiFillTwitterCircle className='cursor-pointer hover:text-black' />
                           
                          </div>
              </Reveal>
            </div>
            <Fade left>
              <div id='contact' className='relative top-24 md:top-48 md:right-24 bg-gray-400 dark:bg-gray-500 '>
                <h2 className='yb-5 py-5 pl-2 bg-gray-500 dark:bg-black font-bold text-shadow-md text-white  text-lg'>Send me a Message</h2>
                <ContactUs/>
              </div>
            </Fade>
          </div>
          <div className='bg-white dark:bg-gray-800 h-48 w-full'>
          </div>
        </section>
     
      </main>
  
    </div>
  )
}
