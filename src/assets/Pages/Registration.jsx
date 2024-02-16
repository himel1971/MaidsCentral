import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Config/AuthProvider';




const Registration = () => {

  const { signUp } = useContext(AuthContext);

  const textStyle = {
    color: '#e67700'
  };





  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    const photoUrl = e.target.photoUrl.value;
    const select = e.target.select.value;
    const phone = e.target.phone.value;

    const userData = {
      name: username,
      image: photoUrl,
      phone: phone,
      type: select,
      totalParcelsBooked: 0,
      totalSpend: 0,
      ratings: 0,
      parcelDelivered: 0,
      reviews: [],
      email: email
    };



















    // Password validation
    const isLengthValid = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!isLengthValid) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }

    if (!hasUpperCase) {
      toast.error('Password must contain at least one capital letter.');
      return;
    }

    if (!hasSpecialCharacter) {
      toast.error('Password must contain at least one special character.');
      return;
    }


    signUp(email, password, username, photoUrl, select)
      .then(result => {
        console.log(result);


        //Send Data To Backend Server
        const userData = {
          name: username,
          image: photoUrl,
          phone: phone,
          type: select,
          totalParcelsBooked: 0,
          totalSpend: 0,
          ratings: 0,
          parcelDelivered: 0,
          reviews: [],
          email: email
        };
        
        
        console.log(userData);
        
        // Send data to the backend server
        const backendApiEndpoint = 'https://y-two-omega.vercel.app/users';
        
        fetch(backendApiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other necessary headers
          },
          body: JSON.stringify(userData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Data saved:', data);
            // Add any additional actions after successful data submission
          })
          .catch(error => {
            console.error('Error saving data:', error);
            // Add error handling logic if needed
          });















        //Send Data To Backend Server
        toast.success('Account Successfully created!');
        window.location.href = '/';
      })
      .catch(error => {
        const alreadyExistsError = 'auth/email-already-in-use';
        const errorCode = error.code;


        {
          if (errorCode === alreadyExistsError) {
            toast.error('You already Have an Account.')
          }
          else {
            toast.error(errorCode)
          }
        }
      })
  };




  return (
    <>
      <section className=" container mx-auto">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside
            className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Pattern"
              src="https://cdn.pixabay.com/photo/2016/05/26/14/50/delivery-1417310_1280.png"
              className="absolute  top-44 left-32   h-3/4 object-cover"
            />

          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">



              <h1
                className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
              >
                Welcome to      <span style={textStyle}>SweptExpress</span>

              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Join our community of sneaker enthusiasts to gain access to exclusive releases, special discounts, and personalized recommendations. Becoming a member is quick and easy. Register to get started.
              </p>

              <form action="/login" onSubmit={handleRegister} className="mt-8 grid grid-cols-6 gap-6">



                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 lowercase bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>


                <div className="col-span-3">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-3">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <select
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    name="select" id="">
                    <option value="user">user</option>
                    <option value="user">rider</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    id="photoUrl"
                    name="photoUrl"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>





                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    The password must have 6 characters, a capital letter, a special character!
                  </p>
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      terms and conditions
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-[#e67700] bg-[#e67700] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <NavLink to="/login" className="text-[#e67700] text-md font-bold hover:text-red-500 underline">Log in</NavLink>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      <Toaster></Toaster>

    </>
  )
}

export default Registration