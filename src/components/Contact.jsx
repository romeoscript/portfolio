import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { slideIn, fadeIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_11syakg',
        'template_yv34mfe',
        {
          from_name: form.name,
          to_name: 'Romeo',
          from_email: form.email,
          to_email: 'romeobourne211@gmail.com',
          message: form.message,
        },
        'AwdcZlkLqsFFrC05Z'
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent! I\'ll get back to you soon.', {
            style: { background: '#111', color: '#ece7e1', border: '1px solid rgba(200,255,0,0.2)' },
          });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error('Something went wrong. Please try again.', {
            style: { background: '#111', color: '#ece7e1' },
          });
        }
      );
  };

  return (
    <div className="-mt-[4rem]">
      <ToastContainer position="bottom-left" />

      {/* ── BIG DRAMATIC HEADING ── */}
      <motion.div variants={slideIn('up', 'tween', 0.1, 0.6)} className="mb-16">
        <p className="text-[11px] uppercase tracking-[5px] text-lime font-syne font-medium mb-3">
          Contact
        </p>
        <h2 className="font-instrument italic text-text-primary text-[48px] xs:text-[64px] sm:text-[80px] md:text-[100px] leading-[0.9] tracking-tight">
          Let's build<br />
          <span className="text-lime">something</span> together
        </h2>
      </motion.div>

      {/* ��─ TWO COLUMN: INFO + FORM ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Left: contact info */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 0.8)}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="space-y-8">
            {[
              { label: 'Email', value: 'romeobourne211@gmail.com', href: 'mailto:romeobourne211@gmail.com' },
              { label: 'Location', value: 'Lagos, Nigeria' },
              { label: 'GitHub', value: 'github.com/romeoscript', href: 'https://github.com/romeoscript' },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/[0.04] pb-6">
                <p className="text-text-dim text-[11px] uppercase tracking-[4px] font-syne mb-2">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-text-primary text-[17px] sm:text-[20px] font-instrument italic
                      hover:text-lime transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-primary text-[17px] sm:text-[20px] font-instrument italic">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-10 flex items-center gap-3 p-4 rounded-2xl bg-lime/[0.06] border border-lime/10">
            <span className="w-3 h-3 rounded-full bg-lime animate-pulse" />
            <div>
              <p className="text-lime text-[14px] font-syne font-semibold">
                Available for new projects
              </p>
              <p className="text-text-dim text-[12px] font-syne mt-0.5">
                Typically responds within 24 hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.3, 0.8)}
          className="lg:col-span-7"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-surface rounded-3xl border border-white/[0.04] p-6 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-text-muted font-syne text-[12px] uppercase tracking-[3px] mb-3">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-dark py-4 px-5 text-text-primary rounded-xl
                    border border-white/[0.04] focus:border-lime/30
                    placeholder:text-text-dim/40 font-syne text-[15px] font-light
                    transition-colors duration-300 outline-none"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-text-muted font-syne text-[12px] uppercase tracking-[3px] mb-3">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-dark py-4 px-5 text-text-primary rounded-xl
                    border border-white/[0.04] focus:border-lime/30
                    placeholder:text-text-dim/40 font-syne text-[15px] font-light
                    transition-colors duration-300 outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-text-muted font-syne text-[12px] uppercase tracking-[3px] mb-3">
                Message
              </span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="bg-dark py-4 px-5 text-text-primary rounded-xl
                  border border-white/[0.04] focus:border-lime/30
                  placeholder:text-text-dim/40 font-syne text-[15px] font-light
                  resize-none transition-colors duration-300 outline-none"
              />
            </label>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 rounded-full
                  bg-lime text-dark font-syne font-bold text-[13px] uppercase tracking-[2px]
                  hover:bg-text-primary transition-colors duration-300"
                onMouseOver={() => {
                  document.querySelector('.contact-btn')?.setAttribute('src', sendHover);
                }}
                onMouseOut={() => {
                  document.querySelector('.contact-btn')?.setAttribute('src', send);
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <img
                  src={send}
                  alt="send"
                  className="contact-btn w-5 h-5 object-contain"
                />
              </button>
              <span className="hidden sm:block text-text-dim text-[11px] font-syne tracking-wide">
                All fields required
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
