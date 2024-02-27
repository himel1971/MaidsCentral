import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MaidEdit = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { id } = useParams();
  const allMaids = useLoaderData();
  const selectedMaid = allMaids.find((maid) => maid._id === id);
console.log(selectedMaid);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your submit logic here...
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageUrl(URL.createObjectURL(selectedFile));
  };

  const handleAddSkill = () => {
    // Logic to add a new skill
  };

  const addExperienceField = () => {
    // Logic to add an experience field
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Maid Name</label>
              <input
                id="name"
                type="text"
                placeholder="Maid name"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
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
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Date of Birth</label>
              <input
                id="date_of_birth"
                type="date"
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
                placeholder="Weight"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Marital Status</label>
              <select
                id="marital_status"
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
                placeholder="Education"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Nationality</label>
              <input
                id="nationality"
                type="text"
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
                placeholder="Supplier"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Skills</label> &nbsp;
              {/* Placeholder for skills state */}
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 border rounded-md border-gray-800"
              >
                Add Skill
              </button>
            </div>
            <div className="col-span-full">
              <label className="text-sm">Dietary Restriction</label>
              <input
                id="restriction"
                type="text"
                placeholder="dietary_restriction"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Home Address</label>
              <input
                id="home_address"
                type="text"
                placeholder="Home Address"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Number of Children</label>
              <input
                id="number_of_children"
                type="number"
                placeholder="Number of Children"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Age of Children</label>
              <input
                id="age_of_children"
                type="text"
                placeholder="Age of Children"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label className="text-lg font-medium ">Experience</label>
              {/* Placeholder for experience state */}
              <button
                type="button"
                onClick={addExperienceField}
                className="px-4 py-2 border rounded-md border-gray-800"
              >
                Add Experience
              </button>
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100"
        >
          Add Maid
        </button>
      </form>
    </section>
  );
};

export default MaidEdit;
