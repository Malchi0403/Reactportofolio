import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'

import { images, navigation, profile, skills } from "../data"
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from "../utils/motion"

const ServiceSkills = ({ index, name }) => {
    return (
        <div className="w-full border  ">
            <div className="mx-auto w-[80%]">

                <Tilt className=" lg:w-[300px] xs:w-[280px]">
                    <motion.div variants={fadeIn("right", "spring", 0.3 * index, 0.75)} className='w-[170px] max-xs:w-[120px] lg:w-full green-pink-gradient p-[1px] rounded-[20px] shadow-sm shadow-slate-500'>
                        <div
                            className='bg-tertiary rounded-[20px] py-1 px-10  flex justify-evenly items-center flex-col'
                        >
                            <h3 className='text-white max-xs:text-[8px] text-[14px] font-bold text-center'>
                                {name}
                            </h3>
                        </div>
                    </motion.div>
                </Tilt>
            </div>
        </div>
    )
}

const About = () => {
    const [Profile] = profile
    return (

        <div className='m-6 mb-36 lg:mb-3 lg:m-14  relative' id={navigation[1].id}>

            <div className='lg:flex xs:block gap-16 border'>
                <Tilt className=" w-[130px] xs:w-[200px] lg:w-full mb-8 mx-auto  items-center  border-8 rounded-lg lg:shadow-md shadow-slate-50">
                    <motion.img variants={fadeIn("", "spring", 0.5, 0.75)} src={images[0].mine} className='h-full w-full' />
                </Tilt>
                <div className="">
                    <div className='lg:text-[42px] xs:text-[32px] text-center'>
                        <motion.h1 initial={{
                            opacity: 0,
                            y: 25,
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 1,
                                }
                            }} className='text-center text-lg md:text-4xl mb-2 md:mb-4'>ABOUT ME</motion.h1>
                        <div className='mx-auto w-[90%]'>
                            <motion.p initial={{
                                opacity: 0,
                                y: -25,
                            }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                        delay: 1.2,
                                    }
                                }} className='text-justify text-xs md:text-base'>{Profile.textAbout}</motion.p>
                        </div>
                    </div>
                    <div className='mt-2 mx-auto w-[90%]'>
                        <motion.h1 variants={textVariant()} className='text-center text-lg md:text-4xl mb-2 md:mb-4'>MY SKILL</motion.h1>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 md:gap-x-14 gap-y-2 md:gap-y-3'>
                            {skills.map((item, i) => (
                                <ServiceSkills key={item.name} index={i} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(About, navigation[1].id)
