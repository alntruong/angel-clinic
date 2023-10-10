"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Map from '../components/GoogleMap';


const Home = () => {
  // Use the useInView hook for the "Contact Banner"
  const [contactBannerRef, contactBannerInView] = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  // Use the useInView hook for the "Dental Clinic Collage"
  const [dentalClinicRef, dentalClinicInView] = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.3, // Trigger animation when 40% of the element is visible
  });

  return (
    <>
      <Suspense fallback={ <Loading /> }>
        {/* Video Banner */}
        <div className="relative z-10 video-container">
          <div className="video-blur">
            <video autoPlay loop className="object-cover w-full h-full">
              <source src="/assets/videos/dental-sample-video.mp4" type="video/mp4"/>
            </video>
          </div>   

          {/* Center Logo */}
          <div className="z-0 inset-0 flex flex-col absolute justify-center items-center px-5">
            <Image src="/assets/images/artscilogo.png" className='pb-8' alt="Logo" width={500} height={67}/>
              <div className="flex flex-wrap">
                <Link href="/about" className="overlay-text text-white rounded-full bg-transparent px-4 py-2 text-center border sm:text-[20px]">
                  Learn more about us
                </Link>
              </div>  
          </div>
        </div>
        
        {/* Contact Banner */}
        <div 
          ref={contactBannerRef}
          className="contact-banner py-10 bg-stone-200 text-black sm:text-[18px] text-[15px]"
        >
          <motion.div
          initial={{ opacity: 0, y: 100 }} // Initial animation properties
          animate={contactBannerInView ? { opacity: 1, y: 0 } : {}} // Animation properties when in view
          exit={{ opacity: 0, y: 100  }} // Animation properties when exiting view
          transition={{ duration: 1 }} // Animation duration
          className="flex flex-col sm:flex-row justify-evenly"
          >
            <div className="contact-info flex flex-col items-center">
              <Image src="/assets/images/map-logo.png" className='content-center pb-2' alt="Logo" width={50} height={50}/>
              <p className="contact-text">Visit us at:</p>
              <p className="contact-text">123 Main Street</p>
              <p className="contact-text">City, State ZIP</p>
            </div>
            <div className="contact-info flex flex-col items-center py-10 sm:py-0">
              <Image src="/assets/images/phone-email.png" className='content-center pb-2' alt="Logo" width={50} height={50}/>
              <p className="contact-text">(123) 456-7890</p>
              <p className="contact-text">hello@angelclinic.dental</p>
            </div>
            <div className="contact-info flex flex-col items-center ">
              <Image src="/assets/images/calendar.png" className='content-center' alt="Logo" width={50} height={50}/>
              <p className="contact-text">Store Hours:</p>
              <p className="contact-text">Mon-Fri: 9am - 4pm</p>
            </div>
          </motion.div>  
        </div>
       
        <div className="section py-10 bg-stone-100 flex flex-col items-center">
          {/*Invitation Banner*/}
          <div className="container mx-16">
            <p className="tracking-[.25em] font-light pb-3 sm:text-2xl text-xl uppercase text-gray-600 text-center">Expert Smile Care</p>
            <h1 className="font-semibold text-black sm:text-[40px] sm:px-[13px] sm:mx-5 text-[25px] uppercase text-center pb-3 px-10">Inviting, Modern Dentistry in Elk Grove</h1>
            <p className="font-[475] sm:text-[20px] text-[15px] text-gray-700 pb-10 sm:mx-20 sm:px-20 md:mx-10 md:px-10 px-10 text-center">Whether you haven’t seen a dentist in six years or six months, we’ll treat you with the same dignity and respect every patient deserves. We’re here to help you achieve your smile goals, no matter what they may be. Need a cavity filled or want to come in for preventive care? We can do that. Ready to replace missing teeth with implants? We can do that, too. And everything in between.</p>
          </div>

          {/*Dental Clinic Collage*/}
          <div 
          ref={dentalClinicRef}
          className="section px-20"
          >
            <motion.div
            initial={{ opacity: 0, y: 100 }} // Initial animation properties
            animate={dentalClinicInView ? { opacity: 1, y: 0 } : {}} // Animation properties when in view
            exit={{ opacity: 0, y: 100  }} // Animation properties when exiting view
            transition={{ duration: 1 }} // Animation duration
            className="flex flex-col xl:grid xl:grid-rows-2 xl:grid-cols-3 gap-3"
            >
              <Image src="/assets/images/dental-office-4.png" alt="Logo" width={475} height={400} className="row-span-2 col-span-1"/>
              <Image src="/assets/images/dental-office-1.png" alt="Logo" width={475} height={150} className="row-start-1 col-start-2 self-stretch"/>
              <Image src="/assets/images/dental-office-2.png" alt="Logo" width={475} height={150} className="row-start-2 col-start-2 self-stretch"/>
              <Image src="/assets/images/dental-office-5.png" alt="Logo" width={475} height={400} className="row-span-2 col-start-3"/>
            </motion.div>
          </div>
        </div>

        {/* Parallax */}
        <div className="relative sm:h-[35rem] h-[49rem] ">
          <div
            className="absolute inset-0 bg-dental bg-fixed bg-no-repeat bg-cover blur-sm contrast-50"
            style={{ backdropFilter: 'blur(5px)' }}
          ></div>

          <div className="sm:grid grid-cols-2 grid-rows-2 gap-4 h-full relative sm:text-3xl text-2xl font-bold sm:px-[8rem] px-[1rem] text-center pt-14 sm:pt-0">
            <div className="p-6 relative z-10 flex flex-col items-center justify-center">
              <Image src="/assets/images/dental_chair.png" className='pb-5' alt="Logo" width={64} height={64}/>
              ADVANCED TECHNOLOGY
            </div>
            <div className="p-6 relative z-10 flex flex-col items-center justify-center">
              <Image src="/assets/images/white-calendar.png" className='pb-5' alt="Logo" width={64} height={64}/>
              ONLINE SCHEDULING
            </div>
            <div className="p-6 relative z-10 flex flex-col items-center justify-center">
              <Image src="/assets/images/papers.png" className='pb-5' alt="Logo" width={64} height={64}/>
              PAPERLESS FORMS
            </div>
            <div className="p-6 relative z-10 flex flex-col items-center justify-center">
              <Image src="/assets/images/card.png" className='pb-5' alt="Logo" width={64} height={64}/>
              FLEXIBLE PAYMENT OPTIONS
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <Map />
        </div> 

        {/* End Banner */}
        <div className="flex flex-col lg:flex-row bg-stone-100 text-black lg:place-content-center">

          <div className="lg:mt-[5rem]">
            <h1 className="text-4xl lg:text-5xl uppercase text-center py-7 font-medium"> Stay Flossy! </h1>
            <p className="text-[#d9bc9a] font-extrabold text-center ">______________________________</p>
          </div>
          
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 md:ml-[10rem] my-10 space-y-4 sm:space-y-0">

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-medium pb-3">Phone</h1>
              <p className="text-lg">Office: (123) 456-7890</p>
              <p className="text-lg">Fax: (123) 456-7890</p>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-medium pb-3">Address</h1>
              <p className="text-lg">123 Main Street</p>
              <p className="text-lg">City, State ZIP</p>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-medium pb-3">Email</h1>
              <p className="text-lg">hello@artsci.dental</p>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-medium pb-3">Hours</h1>
              <p className="text-lg">Monday-Thursday: 9am-4pm</p>
              <p className="text-lg">Friday: Closed</p>
              <p className="text-lg">Saturday: Closed</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>
          </div>
        </div>


      </Suspense> 
    </>
  )
}

export default Home

      