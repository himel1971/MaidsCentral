import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(20);
    const [searchName, setSearchName] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [allUsers, setAllUsers] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [currentPage, perPage, searchName]);

    const fetchUsers = () => {
        const queryParams = [
            `_page=${currentPage}`,
            `_limit=${perPage}`,
            searchName && `name_like=${searchName}`
        ].filter(Boolean).join('&');

        fetch(`https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/users?${queryParams}`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                if (allUsers) setFilteredUsers(data);
            })
            .catch(error => console.error('Error fetching users:', error));
    };

    const handleMakeUser = (_id) => {
        Swal.fire({
            title: "Do you want to make this user a regular user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make them a regular user!",
            cancelButtonText: "No"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Wrap the existing code in the then block of the Swal.fire call
                try {
                    const updateUser = { type: 'user' };

                    const response = await fetch(`https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/users/${_id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updateUser)
                    });

                    const data = await response.json();
                    if (data.modifiedCount > 0) {
                        toast.success('User type successfully updated');
                        fetchUsers(); // Assuming fetchUsers() fetches and updates the user list
                    } else {
                        toast.error('Failed to update user type');
                    }
                } catch (error) {
                    console.error('Error updating user type:', error);
                    toast.error('Failed to update user type');
                }
            } else {
                toast.warning('Operation Canceled');
            }
        });
    };

    const handleMakeAdmin = (_id) => {
        Swal.fire({
            title: "Do you want to make this user an admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make them an admin!",
            cancelButtonText: "No"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Wrap the existing code in the then block of the Swal.fire call
                try {
                    const updateUser = { type: 'admin' };

                    const response = await fetch(`https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/users/${_id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updateUser)
                    });

                    const data = await response.json();
                    if (data.modifiedCount > 0) {
                        toast.success('User type successfully updated');
                        fetchUsers(); // Assuming fetchUsers() fetches and updates the user list
                    } else {
                        toast.error('Failed to update user type');
                    }
                } catch (error) {
                    console.error('Error making user an admin:', error);
                    toast.error('Failed to make user an admin');
                }
            } else {
                toast.warning('Operation Canceled');
            }
        });
    };

    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };

    const filterUsers = (type) => {
        if (type === 'all') {
            setFilteredUsers(users);
            setAllUsers(true);
        } else {
            setFilteredUsers(users.filter((user) => user.type === type));
            setAllUsers(false);
        }
    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between items-center p-5">
                    <h1 className="text-lg font-semibold text-black dark:text-white">All Users</h1>
                    <div>
                        <button onClick={() => filterUsers('all')} className="mr-2 font-medium text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300">All Users</button>
                        <button onClick={() => filterUsers('user')} className="mr-2 font-medium text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300">Regular Users</button>
                        <button onClick={() => filterUsers('admin')} className="font-medium text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300">Admins</button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Search by name" className="border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg" value={searchName} onChange={handleSearchNameChange} />
                        <button className="bg-blue-500 dark:bg-blue-700 text-white px-3 py-1 rounded-lg" onClick={() => fetchUsers()}>Search</button>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Phone</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Type</th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Make User</span>
                                <span className="sr-only">Make Admin</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</th>
                                <td className="px-6 py-4">{user.phone}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4 uppercase">{user.type}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link onClick={() => handleMakeUser(user._id)} className="font-medium text-[#EA580C] dark:text-blue-500 hover:underline">Make User</Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <Link onClick={() => handleMakeAdmin(user._id)} className="font-medium text-[#EA580C] dark:text-blue-500 hover:underline">Make Admin</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Toaster />
        </div>
    );
};

export default AllUsers;
