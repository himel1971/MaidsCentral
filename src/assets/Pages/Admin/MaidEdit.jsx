import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const MaidEdit = () => {
  // Declare age as a state variable with initial value of 0
  const { id } = useParams();
  const allMaids = useLoaderData();
  const selectedMaid = allMaids.find((maid) => maid._id === id);

  const {
    _id,
    name,
    date_of_birth,
    place_of_birth,
    height,
    weight,
    marital_status,
    pork_status,
    religion,
    rest_day_preference,
    education,
    experience_years,
    nationality,
    languages,
    Supplier,
    home_address,
    number_of_children,
    age_of_children,
    restriction
  } = selectedMaid || {};

  // console.log(selectedMaid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);



    const updatedMaid = {
      name: formData.get("name"),
      date_of_birth: formData.get("date_of_birth"),
      place_of_birth: formData.get("place_of_birth"),
      height: formData.get("height"),
      weight: formData.get("weight"),
      marital_status: formData.get("marital_status"),
      pork_status: formData.get("pork_status"),
      religion: formData.get("religion_status"),
      rest_day_preference: formData.get("rest_day_preference"),
      education: formData.get("education"),
      experience_years: formData.get("experience_years"),
      nationality: formData.get("nationality"),
      languages: formData.get("languages"),
      Supplier: formData.get("Supplier"),
      home_address: formData.get("home_address"),
      number_of_children: formData.get("number_of_children"),
      age_of_children: formData.get("age_of_children"),
      restriction: formData.get("restriction"),
    };

    console.log(updatedMaid);

    try {
      const response = await fetch(`https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/update/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMaid),
      });

      if (!response.ok) {
        throw new Error('Error updating maid information');
      }

      alert('Maid information updated successfully!');
    } catch (error) {
      console.error(error.message);
      alert('Failed to update maid information');
    }





  };











  return (
    <section className="p-6 bg-gray-100 text-gray-900 font-rubik">
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Edit Maid Information</p>
            <p className="text-xs">
              Please fill the Wrong Data to fix maid profile.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Maid Name</label>
              <input
                id="name"
                type="text"
                name='name'
                defaultValue={name}
                placeholder="Maid name"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            {/* <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Picture Links</label>
              <div className="flex items-center justify-center">
                <input
                  id="picture"
                  type="file"
                  onChange={handleFileChange}
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                  accept="image/*"
                  required
                />
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-20 h-auto rounded-md border-gray-300 border"
                  />
                )}
              </div>
            </div> */}
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Date of Birth</label>
              <input
                id="date_of_birth"
                type="date"
                name='date_of_birth'
                defaultValue={date_of_birth}
                placeholder="Date of Birth"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Place of Birth</label>
              <input
                id="place_of_birth"
                type="text"
                name='place_of_birth'
                defaultValue={place_of_birth}
                placeholder="Place of Birth"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Height</label>
              <input
                id="height"
                type="text"
                name='height'
                defaultValue={height}
                placeholder="Height"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Weight</label>
              <input
                id="weight"
                type="text"
                name='weight'
                defaultValue={weight}
                placeholder="Weight"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Marital Status</label>
              <select
                id="marital_status"
                defaultValue={marital_status}
                name='marital_status'
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              >
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Able to handle Pork</label>
              <select
                id="pork_status"
                defaultValue={pork_status}
                name='pork_status'
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-span-full">
              <label className="text-sm">Religion</label> &nbsp;
              <select
                id="religion_status"
                defaultValue={religion}
                name='religion_status'
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              >
                <option>Buddhism</option>
                <option>Christianity</option>
                <option>Islam</option>
                <option>Hinduism</option>
                <option>Taoism</option>
              </select>
            </div>














            
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Rest Day Preference</label>
              <input
                id="rest_day_preference"
                defaultValue={rest_day_preference}
                name='rest_day_preference'
                type="text"
                placeholder="Rest Day Preference"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Education</label>
              <input
                id="education"
                type="text"
                defaultValue={education}
                name='education'
                placeholder="Education"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Nationality</label>
              <input
                id="nationality"
                type="text"
                defaultValue={nationality}
                name='nationality'
                placeholder="Nationality"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Languages</label>
              <input
                id="languages"
                type="text"
                defaultValue={languages}
                name='languages'
                placeholder="Languages"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Supplier</label>
              <input
                id="Supplier"
                type="text"
                defaultValue={Supplier}
                name='Supplier'
                placeholder="Supplier"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Dietary Restriction</label>
              <input
                id="restriction"
                type="text"
                defaultValue={restriction}
                name='restriction'
                placeholder="dietary_restriction"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Home Address</label>
              <input
                id="home_address"
                type="text"
                defaultValue={home_address}
                name='home_address'
                placeholder="Home Address"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Number of Children</label>
              <input
                id="number_of_children"
                type="number"
                defaultValue={number_of_children}
                name='number_of_children'
                placeholder="Number of Children"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">experience in years </label>
              <input
                id="experience_years"
                type="number"
                defaultValue={experience_years}
                name='experience_years'
                placeholder="experience_years"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Age of Children</label>
              <input
                id="age_of_children"
                type="text"
                defaultValue={age_of_children}
                name='age_of_children'
                placeholder="Age of Children"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100"
        >
          Submit Edit
        </button>
      </form>
    </section>
  );
};

export default MaidEdit;
