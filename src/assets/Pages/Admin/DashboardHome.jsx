import React, { useState, useEffect } from 'react';

const DashboardHome = () => {
  const [maids, setMaids] = useState([]);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/maids')
      .then(response => response.json())
      .then(data => setMaids(data));

    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    const foundAdmin = users.find(user => user.type === 'admin');
    setAdmin(foundAdmin || null);
  }, [users]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 capitalize sm:text-4xl">
            Welcome to Your Dashboard!
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            We're glad you're here! This is your personalized dashboard where you can find all the important statistics and information you need.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Maids</dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{maids.length}</dd>
            </div>
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Our Staff</dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{admin ? 1 : 0}</dd>
            </div>
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Users</dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{users.length}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
