import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const AllMaids = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(20);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [currentPage, perPage, searchName]);

    const fetchUsers = () => {
        const queryParams = [
            `_page=${currentPage}`,
            `_limit=${perPage}`,
            searchName && `name_like=${searchName}`
        ].filter(Boolean).join('&');

        fetch(`http://localhost:5000/maids?${queryParams}`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    };






    const handleDelete = (_id) => {
        // Display a confirmation alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // If the user confirms, proceed with the deletion
            if (result.isConfirmed) {
                const URL = `http://localhost:5000/maids/${_id}`;
                fetch(URL, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            toast.success('Successfully Deleted!');
                            const filterData = updatedOrder.filter((product) => product._id !== _id);
                            setUpdatedOrder(filterData);
                            window.location.reload();
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting Maid:', error.message);
                        toast.error('Failed to delete Maid');
                    });
            }
        });
    };
    












    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between items-center p-5">
                    <h1 className="text-lg font-semibold text-black dark:text-white">All Users</h1>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Search by name" className="border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg" value={searchName} onChange={handleSearchNameChange} />
                        <button className="bg-blue-500 dark:bg-blue-700 text-white px-3 py-1 rounded-lg" onClick={() => fetchUsers()}>Search</button>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Nationality</th>
                            <th scope="col" className="px-6 py-3">Religion</th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Make User</span>
                                <span className="sr-only">Make Admin</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 uppercase">{user.type}

                                    <img className="mask mask-square h-9" src={user.picture_url} />

                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</th>
                                <td className="px-6 py-4">{user.nationality}</td>
                                <td className="px-6 py-4">{user.religion}</td>
                                <td className="px-6 py-4 text-right">

                                    <Link onClick={() => handleDelete(user._id)} className="font-medium text-[#EA580C] dark:text-blue-500 hover:underline">Delete</Link>
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

export default AllMaids