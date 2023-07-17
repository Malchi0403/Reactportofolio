import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { navigation } from "../data";
import Swal from "sweetalert2";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,

        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Misael Malchiram Timpolas",
                    from_email: form.email,
                    to_email: "misaeltimpolas04@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thank you. I will get back to you as soon as possible.',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={` xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-sky-950 h-5/6 px-8 py-6 rounded-2xl'
            >
                <p className={`${styles.sectionSubText} mb-2 ms-1`}>Get in touch</p>
                <h3 className="text-white font-bold md:text-[48px] sm:text-[40px] xs:text-[38px] text-[30px]">Contact</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-3'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            required
                            autoComplete="off"
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            required
                            autoComplete="off"
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Message</span>
                        <textarea
                            rows={5}

                            name='message'
                            value={form.message}
                            required
                            autoComplete="off"
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, navigation[3].id);