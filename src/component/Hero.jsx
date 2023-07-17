import { Float, Preload } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { motion } from 'framer-motion'
import { Suspense, useEffect, useRef } from "react"
import { Link } from "react-scroll"
import { Newest } from "../Newest"
import { navigation, profile } from "../data"
import { SectionWrapper } from "../hoc"
import CanvasLoader from "./Loader"
import { Stars } from "./canvas"


// download
const PDF_FILE_URL = "https://portofolio-react-tau.vercel.app/New_Mine_CV.pdf"
// size 3d
function MyMesh({ isMobile }) {
    const meshPosition = useRef(isMobile ? [0, -2.80, 0] : [1.2, -3.2, 1.2]);
    const meshScale = useRef(1.3);
    const meshRotation = useRef(isMobile ? [0.3, 0, 0] : [0, 0, 0]);
    const { size } = useThree();

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            const isMobile = innerWidth > 1024;

            if (isMobile) {
                meshScale.current = 1;
                meshPosition.current = [0, -2.80, 0];
                meshRotation.current = [0.3, 0, 0];
            } else {
                meshPosition.current = [1.2, -3.2, 1.2];
                meshScale.current = 1;
                meshRotation.current = [0, 0, 0];
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [size]);

    return (
        <group>

            <mesh scale={meshScale.current} position={meshPosition.current}>
                <Float position={[0.2, 0.65, 0]} rotation={meshRotation.current}>
                    <ambientLight intensity={1} />
                    <Newest />
                </Float>
            </mesh>
        </group>
    );
}



const Hero = () => {
    const downloadFile = (url) => {
        fetch(url).then(response => response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split("/").pop()
            const aTag = document.createElement("a")
            aTag.href = blobURL
            aTag.setAttribute("download", fileName)
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
        })

    }
    const [Profile] = profile
    return (
        <div className="mb-20 mt-2 md:mt-16 lg:mt-0">
            <Stars />
            <section id="home" className="h-[100vh] flex items-center w-full flex-col">
                <div className="container mx-auto h-full flex justify-center ">
                    <div className="flex items-center"
                    >
                        <div className="flex flex-col-reverse xs:gap-y-4 scale-75 lg:scale-100  md:flex-col-reverse lg:flex-row">
                            <motion.div initial={{
                                opacity: 0,
                                x: -25,
                            }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1,
                                        delay: 1,
                                    }
                                }} className="w-1 mr-8 mt-11 md:h-48 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500 lg:block md:hidden " />
                            <div className="flex flex-col sm:max-w-2xl  mr-0 items-center md:w-full md:items-center lg:items-start">
                                <motion.div initial={{
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
                                    }} className="mt-12 mr-4 text-center md:pl-10 md:text-left font-body font-extrabold ">
                                    <h1
                                        className="text-2xl md:text-3xl md:mb-4">
                                        Hey, I'm <span className="text-fuchsia-800">{Profile.name}</span>
                                    </h1>
                                    <p className="mx-auto text-center md:text-justify text-base mb-2 w-3/5 md:w-full md:text-base md:mb-6">
                                        {Profile?.content}
                                    </p>
                                    <button
                                        onClick={() => downloadFile(PDF_FILE_URL)} className='text-white font-primary tracking-wider bg-gradient-to-br from-violet-500 via-pink-500 to-red-500 px-10 py-1 md:py-2 md:px-14 rounded-full' >Download Resume</button>
                                </motion.div>
                            </div>
                            <motion.div initial={{
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
                                }} className="w-1/2 lg:w-auto mx-auto h-60  bg-violet-800 bg-opacity-20 rounded-t-full outline outline-offset-8 outline-fuchsia-600">
                                <Canvas className="absolute inset-0">
                                    <Suspense fallback={<CanvasLoader />}>
                                        <MyMesh />
                                    </Suspense>
                                    <Preload all />
                                </Canvas>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div initial={{
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
                    }} className="absolute  lg:bottom-64 md:bottom-64 bottom-7 ">
                    <div className="absolute hidden md:top-44 lg:bottom-1 w-full md:flex justify-center  items-center z-30">
                        <Link
                            to={navigation[1].id}
                            spy={true}
                            smooth={true}
                            duration={400}
                            offset={90}
                            className="w-[35px] h-[64px] rounded-3xl border-4 bg-slate-600 border-secondary flex justify-center items-start p-2 cursor-pointer"
                        >
                            <motion.div
                                animate={{
                                    y: [0, 24, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className="w-3 h-3 rounded-full bg-secondary mb-1"
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default SectionWrapper(Hero, navigation[0].id)