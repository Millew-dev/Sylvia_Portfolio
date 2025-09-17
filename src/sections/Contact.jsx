import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Reset form on success
            setForm({ name: "", email: "", message: "" });
            // Optional: show a success message
            // alert("Message sent successfully! I'll get back to you shortly.");
        } catch (error) {
            console.log("EmailJS Error:", error);
            // Optional: show an error toast/alert
            // alert("Sorry, something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="px-5 md:px-10 mt-10 md:mt-16">
            <div className=" w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch – Let’s Connect"    
                    sub="Drop a message and let’s explore what we can build together."
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                    <div className="lg:col-span-5">
                        <div className="flex-center card-border rounded-xl p-8 md:p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-6"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-sm md:text-base text-white mb-2">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What’s your good name?"
                                        autoComplete="name"
                                        className="w-full rounded-lg bg-black/60 text-white placeholder-white/60 border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none p-3 md:p-4 text-base md:text-lg"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm md:text-base text-white mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What’s your email address?"
                                        autoComplete="email"
                                        className="w-full rounded-lg bg-black/60 text-white placeholder-white/60 border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none p-3 md:p-4 text-base md:text-lg"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm md:text-base text-white mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows="6"
                                        className="w-full rounded-lg bg-black/60 text-white placeholder-white/60 border border-white/10 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none p-3 md:p-4 text-base md:text-lg leading-relaxed resize-y min-h-[140px]"
                                        required
                                    />
                                </div>

                                <button type="submit" disabled={loading} className="w-full md:w-auto self-start">
                                    <div className="cta-button group w-full md:w-auto px-6 py-4 md:py-4 md:px-14 md:min-w-[16rem] rounded-xl">
                                        <div className="bg-circle" />
                                        <p className="text text-lg md:text-xl">
                                            {loading ? "Sending..." : "Send"}
                                        </p>
                                        <div className="arrow-wrapper ml-3">
                                            <img src="/images/arrow-down.svg"  alt="arrow"
                                                 className="w-5 h-5 md:w-6 md:h-6"/>
                                        </div>
                                    </div>
                                </button>





                            </form>
                        </div>
                    </div>

                <div className="lg:col-span-7 min-h-[80vh] flex items-center">
                    <div className="bg-[#cd7c2e] w-full h-full lg:h-[80vh] hover:cursor-grab rounded-3xl overflow-hidden">
                        <ContactExperience />
                    </div>
                </div>
                </div>


                </div>
        </section>
    );
};

export default Contact;