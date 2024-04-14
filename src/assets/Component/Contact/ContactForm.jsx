import React, { useState } from 'react';

const ContactForm = () => {
  const [language, setLanguage] = useState('English');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const defaultMessages = {
    English: `I want to know more. Can someone assist me?`,
    Mandarin: `我想知道更多。能有人帮助我吗？`,
    Bahasa: `Saya ingin tahu lebih lanjut. Bolehkah seseorang membantu saya?`,
    Tagalog: `Gusto ko malaman pa. Puwede ba akong tulungan niyo?`,
  };

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = () => {
	const phoneNumber = '+6589114308';
	const whatsappMessage = `Hi, I'm ${name}. ${message}`;
	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
	window.open(whatsappUrl, '_blank');
  };
  

  return (
    <div className="grid max-w-screen-xl  gap-8 px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 text-gray-800">
      {/* <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading lg:text-5xl">Let's talk!</h2>
          <div className="text-gray-600">In the comfort of your home we conduct House Visits any time at your convenience. Drop us a message and we will get back to you within a day.</div>
        </div> */}
        {/* <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" /> */}
      {/* </div> */}
      <form noValidate="" className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold leading lg:text-5xl">Let's talk</h2>
          <div className="text-gray-600"> Drop us a message and we will get back to you soon.</div>
        <div>
          <label htmlFor="name" className="text-sm">Your name</label>
          <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm">Phone Number</label>
          <input id="phone" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="language" className="text-sm">Language</label>
          <select id="language" className="w-full p-3 rounded bg-gray-100" onChange={handleChange} value={language}>
            {Object.keys(defaultMessages).map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wider uppercase rounded bg-[#065FB1] text-gray-50">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
