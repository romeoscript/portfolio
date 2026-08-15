import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionLabel from './fx/SectionLabel';
import ParticleField from './fx/ParticleField';
import Magnetic from './fx/Magnetic';

const TOAST_STYLE = {
  background: '#fff',
  color: '#000',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '14px',
  borderRadius: '8px',
};

const DETAILS = [
  {
    label: 'Email',
    value: 'romeobourne211@gmail.com',
    href: 'mailto:romeobourne211@gmail.com',
  },
  { label: 'Location', value: 'Lagos, Nigeria' },
  {
    label: 'GitHub',
    value: 'github.com/romeoscript',
    href: 'https://github.com/romeoscript',
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
          toast.success("Message sent. I'll get back to you soon.", { style: TOAST_STYLE });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error('Something went wrong. Please try again.', { style: TOAST_STYLE });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      <SectionLabel index="08" title="Contact" />
      <ParticleField />
      <ToastContainer position="bottom-right" theme="light" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-6">
            Contact
          </p>
          <h2 className="reveal-item fade-up font-display font-bold text-bone text-[13vw] sm:text-[7vw] leading-[0.86] tracking-tighter">
            Let's build
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">
              something
            </span>{' '}
            together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          {/* Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {DETAILS.map((item) => (
                <div key={item.label} className="border-b border-white/[0.08] py-6">
                  <p className="text-smoke text-[10px] uppercase tracking-[0.3em] font-display mb-2">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="hoverable text-bone text-[17px] sm:text-[20px] font-display tracking-tight hover:text-ash transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-bone text-[17px] sm:text-[20px] font-display tracking-tight">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 border border-white/[0.08] rounded-xl p-5 bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
              <div>
                <p className="text-bone text-[14px] font-display font-medium">
                  Available for new projects
                </p>
                <p className="text-smoke text-[12px] font-light mt-0.5">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="flex flex-col">
                  <span className="text-smoke text-[10px] uppercase tracking-[0.3em] font-display mb-1">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="field-input hoverable"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-smoke text-[10px] uppercase tracking-[0.3em] font-display mb-1">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="field-input hoverable"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-smoke text-[10px] uppercase tracking-[0.3em] font-display mb-1">
                  Message
                </span>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  className="field-input hoverable"
                />
              </label>

              <div className="flex items-center justify-between gap-6 pt-4">
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] text-bone hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50"
                  >
                    {loading ? 'Sending…' : 'Send it'}
                  </button>
                </Magnetic>

                <p className="text-smoke text-[10px] uppercase tracking-[0.25em] font-display text-right">
                  All fields
                  <br />
                  required
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
