import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Config/AuthProvider';

const BookForm = ({ data }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user || {};

    const { name } = data;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        // Construct WhatsApp message with data
        const whatsappMessage = `Hi I'm ${name}.My email is ${email}. My Phone number ${phone}. ${message}`;

        // Phone number to send the message to
        const phoneNumber = '+6589114308';

        // Construct WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp URL
        window.open(whatsappUrl, '_blank');

        // Optionally, show a success message
        toast.success(`Message sent to WhatsApp!`);
    }




    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-[#0E3997] sm:text-3xl">Want to know more about {name.slice(0, 6)}? </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    We are here to answer your questions. <br /> Send Us A Message!!
                </p>

                <form onSubmit={handleSubmit} action="#" className="mb-0 mt-6 space-y-4 gap-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">

                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                name='name'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Your Name"
                                defaultValue={displayName}
                            />
                        </div>

                        <div className="relative my-4">
                            <input
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                defaultValue={email}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="tel"
                                name='phone'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Your mobile number"
                                required
                            />
                        </div>
                        <div className="relative my-4">
                            <textarea
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter your message"
                                defaultValue={`I Want know more about ${name} .`}
                                name='message'
                            />
                        </div>
                    </div>

                    <button

                        type="submit"
                        className="block w-full rounded-lg bg-[#0E3997] hover:bg-[#0e4997e5] px-5 py-3 text-sm font-medium text-white"
                    >
                        Send Message
                    </button>

                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default BookForm;
