import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { gitHub, verceel } from "../assets/tech";
import { navigation, profile } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const ProjectCard = ({ index, title, desc, vercel, github, image, tags }) => (
    <motion.div initial={{
        opacity: 0,
        y: -25,
    }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1 + index * 0.2,
            }
        }}>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-sky-950 mb-40 p-5 rounded-2xl sm:w-[360px] w-full '
        >
            <motion.div initial={{
                opacity: 0,
                y: -25,
            }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1,
                    }
                }} className='relative w-full h-[230px] '>
                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-xl'
                />

                <div className='absolute inset-0 top-[-8px] flex justify-between gap-3 m-3 '>
                    <div
                        onClick={() => window.open(vercel, "_blank")}
                        className='bg-slate-100 card_image w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={verceel}
                            alt='source code'
                            className='w-5/6 h-5/6 object-contain'
                        />
                    </div>
                    <div
                        onClick={() => window.open(github, "_blank")}
                        className='black-gradient card_image w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={gitHub}
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>

            </motion.div>

            <div className='mt-5 overflow-auto'>
                <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                <p className='mt-2 text-secondary text-sm' style={{ maxHeight: '65px' }}>{desc}</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    </motion.div>
)

const Projects = () => {
    const [Profile] = profile
    return (
        <>
            <motion.div initial={{
                opacity: 0,
                y: -25,
            }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 0.5,
                    }
                }} className='m-6 max-xs:mt-10 mb-36 lg:mb-3 lg:mt-14  lg:mx-14  '>
                <div>
                    <motion.p initial={{
                        opacity: 0,
                        x: -25,
                    }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                                delay: 0.5,
                            }
                        }} className={`${styles.sectionSubText} mb-5 max-xs:mb-1`}>My Project</motion.p>
                    <motion.h2 initial={{
                        opacity: 0,
                        y: -25,
                    }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.8,
                            }
                        }} className={`${styles.sectionHeadText} mb-6`}>Projects Experience</motion.h2>
                </div>

                <div className='w-full flex'>
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 1,
                            }
                        }}
                        className='mt-3 text-secondary text-[14px] max-w-7xl max-xs:leading-5 leading-[30px]'
                    >
                        Following projects showcases my skills and experience. Each project is briefly described with
                        links to code repositories and live demos in it. It reflects my
                        ability to solve complex problems, work with different technologies,
                        and manage projects effectively.
                    </motion.p>
                </div>

                <div className='mt-5 -inset-y-1 flex flex-wrap gap-7 max-xs:gap-0'>
                    {Profile.projects.map((item, index) => {
                        return (
                            <ProjectCard key={`item-${index}`} index={index} {...item} />
                        )
                    })}
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Projects, navigation[2].id)