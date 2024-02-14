import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const BoxTableData = ({ maid }) => {
    const { id, date_of_birth, height, weight, experience_years } = maid;
    const age = new Date().getFullYear() - new Date(date_of_birth).getFullYear();

    const handleShortList = () => {
        toast.success(`Successfully shortlisted! ID: ${id}`);
    }

    return (
        <div className="">
            <table className="table">
                <tbody>
                    <tr className="hover">
                        <th>Age</th>
                        <td>{age}</td>
                    </tr>
                    <tr className="hover">
                        <th>Height</th>
                        <td>{height}</td>
                    </tr>
                    <tr className="hover">
                        <th>Weight</th>
                        <td>{weight}</td>
                    </tr>
                    <tr className="hover">
                        <th>Experience</th>
                        <td>{experience_years} Years</td>
                    </tr>
                </tbody>
            </table>

            {/* <div className='text-center'>
                <button
                    onClick={handleShortList}
                    className="btn text-center"
                >
                    Shortlist
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div> */}



            <Toaster />
        </div>
    );
}

export default BoxTableData;
