import React, { useState } from 'react';

const OurAgency = () => {
  const [language, setLanguage] = useState('English');

  const defaultMessages = {
    English: `I want to know more. Can someone assist me?`,
    Mandarin: `我想知道更多。能有人帮助我吗？`,
    Bahasa: `Saya ingin tahu lebih lanjut. Bolehkah seseorang membantu saya?`,
    Tagalog: `Gusto ko malaman pa. Puwede ba akong tulungan niyo?`,
  };
  

  const sendMessage = () => {
    const phoneNumber = '+6589114308';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessages[language])}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 text-gray-800 my-11">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img
              src="https://i.ibb.co/7VHv7Yh/josue-michel-Mwxs-RSG1-A2s-unsplash.jpg"
              alt=""
              className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
            />
          </div>
        </div>
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-[#0856a9] text-gray-50">
          <h1 className="text-white font-semibold text-4xl leading-10 capitalize mb-4">
            Our Approach Stands Out
          </h1>
          <h2 className="text-5xl font-semibold mb-4 uppercase tracking-wider">
            Ethical Agency
          </h2>
          <p className="text-white text-lg font-medium mb-6 ">
            We will listen to your needs!!
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            <select
              className="p-2 border rounded bg-white border-gray-800 text-black text-lg font-medium uppercase"
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              {Object.keys(defaultMessages).map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <button
              type="button"
        
              className="px-5 py-3 border rounded bg-white border-gray-800 text-black text-lg font-medium uppercase"
              onClick={sendMessage}
            >
              chat with a live agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAgency;