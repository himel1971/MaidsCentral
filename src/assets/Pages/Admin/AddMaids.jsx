import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddMaids = () => {


  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [age, setAge] = useState('');

  // add experience function starts
  const [experienceFields, setExperienceFields] = useState([
    {
      country: '',
      employer: '',
      duration: '',
      responsibilities: ''
    }
  ]);
  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { country: '', employer: '', duration: '', responsibilities: '' }]);
  };
  const handleChange = (index, key, value) => {
    const updatedFields = [...experienceFields];
    updatedFields[index][key] = value;
    setExperienceFields(updatedFields);
  };

  // Add experience function Ends

  //  Add religion starts


  // Religion and skills as arrays
  const [religions, setReligions] = useState([]);
  const [skills, setSkills] = useState([]);

  // Handlers for adding and removing religions and skills
  const handleAddReligion = () => {
    setReligions([...religions, '']);
  };

  const handleRemoveReligion = (index) => {
    const updatedReligions = [...religions];
    updatedReligions.splice(index, 1);
    setReligions(updatedReligions);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  //  Add religion end


  //image upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageUrl(URL.createObjectURL(selectedFile));
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('https://api.imgbb.com/1/upload?key=4981389f0f38b16544659f3811d2a130', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.url;
    } else {
      throw new Error('Failed to upload image');
    }
  };

  //image upload








  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await handleImageUpload();
      const dateOfBirth = new Date(e.target.elements.date_of_birth.value);
      const currentDate = new Date();
      const calculatedAge = currentDate.getFullYear() - dateOfBirth.getFullYear();
      setAge(calculatedAge);

      // Prepare the data object
      const data = {
        name: e.target.elements.name.value.toLowerCase(),
        picture_url: imageUrl,
        age: calculatedAge,
        date_of_birth: e.target.elements.date_of_birth.value,
        place_of_birth: e.target.elements.place_of_birth.value.toLowerCase(),
        height: e.target.elements.height.value,
        weight: e.target.elements.weight.value,
        marital_status: e.target.elements.marital_status.value.toLowerCase(),
        pork_status: e.target.elements.pork_status.value,
        // religion: religions.map(religion => religion.toLowerCase()), religion_status
        religion: e.target.elements.religion_status.value.toLowerCase(),
        rest_day_preference: e.target.elements.rest_day_preference.value.toLowerCase(),
        education: e.target.elements.education.value.toLowerCase(),
        experience_years: e.target.elements.experience_years.value,
        nationality: e.target.elements.nationality.value.toLowerCase(),
        languages: e.target.elements.languages.value.toLowerCase(),
        home_address: e.target.elements.home_address.value.toLowerCase(),
        number_of_children: e.target.elements.number_of_children.value,
        age_of_children: e.target.elements.age_of_children.value,
        skills: skills.map(skill => skill.toLowerCase()),
        restriction: e.target.elements.restriction.value.toLowerCase(),
        experience: experienceFields.map(experience => ({
          country: experience.country.toLowerCase(),
          employer: experience.employer.toLowerCase(),
          duration: experience.duration.toLowerCase(),
          responsibilities: experience.responsibilities.toLowerCase(),
        }))
      };

      // Send a POST request to the backend
      const response = await fetch('http://localhost:5000/maids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Success
        Swal.fire({
          title: 'Maid added successfully!',
          text: 'we added on more maid successfully to our server!!',
          icon: 'success',
        });
      } else {
        // Error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Failed to add maid. Please try again later.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        footer: 'Failed to upload image.',
      });
    }
  };













  return (
    <section className="p-6 bg-gray-100 text-gray-900 font-rubik">
      <form onSubmit={handleSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12" >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Add Maid Information</p>
            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Maid Name</label>
              <input id="name" type="text" placeholder="Maid name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Picture Links</label>
              <div className='flex items-center justify-center'>
                <input id="picture" type="file" onChange={handleFileChange} className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" accept="image/*" required />
                {imageUrl && <img src={imageUrl} alt="Preview" className="w-20 h-auto rounded-md border-gray-300 border" />}
              </div>
            </div>
            {/* <div className="col-span-full">
              <label className="text-sm">Address</label>
              <input id="address" type="text" placeholder="Address" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div> */}
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Date of Birth</label>
              <input id="date_of_birth" type="date" placeholder="Date of Birth" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Place of Birth</label>
              <input id="place_of_birth" type="text" placeholder="Place of Birth" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Height</label>
              <input id="height" type="text" placeholder="Height" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Weight</label>
              <input id="weight" type="text" placeholder="Weight" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Marital Status</label>
              <select id="marital_status" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Able to handle Pork</label>
              <select id="pork_status" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required>
                <option>Yes</option>
                <option>No</option>

              </select>
            </div>


            <div className="col-span-full">
              <label className="text-sm">Religion</label> &nbsp;
              {/* {religions.map((religion, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Religion"
                    value={religion}
                    onChange={(e) => {
                      const updatedReligions = [...religions];
                      updatedReligions[index] = e.target.value;
                      setReligions(updatedReligions);
                    }}
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required
                  />
                  <button type="button" onClick={() => handleRemoveReligion(index)} className="px-4 py-2 border rounded-md border-gray-800">Remove Religion</button>
                </div>
              ))}
              <button type="button" onClick={handleAddReligion} className="px-4 py-2 border rounded-md border-gray-800">Add Religion</button> */}


              <select id="religion_status" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required>
                <option>Buddhism</option>
                <option>Christianity</option>
                <option>Islam</option>
                <option>Hinduism</option>
                <option>Taoism</option>
              </select>
            </div>





            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Rest Day Preference</label>
              <input id="rest_day_preference" type="text" placeholder="Rest Day Preference" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Education</label>
              <input id="education" type="text" placeholder="Education" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Experience Years</label>
              <input id="experience_years" type="number" placeholder="Experience Years" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Nationality</label>
              <input id="nationality" type="text" placeholder="Nationality" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Languages</label>
              <input id="languages" type="text" placeholder="Languages" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>


            <div className="col-span-full">
              <label className="text-sm">Skills</label> &nbsp;
              {skills.map((skill, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) => {
                      const updatedSkills = [...skills];
                      updatedSkills[index] = e.target.value;
                      setSkills(updatedSkills);
                    }}
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                  />
                  <button type="button" onClick={() => handleRemoveSkill(index)} className="px-4 py-2 border rounded-md border-gray-800">Remove Skill</button>
                </div>
              ))}
              <button type="button" onClick={handleAddSkill} className="px-4 py-2 border rounded-md border-gray-800">Add Skill</button>
            </div>



            <div className="col-span-full">
              <label className="text-sm">Dietary Restriction</label>
              <input id="restriction" type="text" placeholder="dietary_restriction" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Home Address</label>
              <input id="home_address" type="text" placeholder="Home Address" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Number of Children</label>
              <input id="number_of_children" type="number" placeholder="Number of Children" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Age of Children</label>
              <input id="age_of_children" type="text" placeholder="Age of Children" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
            </div>






            <div className="col-span-full">
              <label className="text-lg font-medium ">Experience</label>

              {experienceFields.map((experience, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 border-2 rounded border-emerald-950 p-3 my-1 pb-8">
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Working Country</label>
                    <input
                      type="text"
                      placeholder="Country"
                      value={experience.country}
                      onChange={(e) => handleChange(index, 'country', e.target.value)}
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Employer Name</label>
                    <input
                      type="text"
                      placeholder="Employer"
                      value={experience.employer}
                      onChange={(e) => handleChange(index, 'employer', e.target.value)}
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Duration of work</label>
                    <input
                      type="text"
                      placeholder="Duration"
                      value={experience.duration}
                      onChange={(e) => handleChange(index, 'duration', e.target.value)}
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="text-sm">Responsibilities</label>
                    <input
                      type="text"
                      placeholder="Responsibilities"
                      value={experience.responsibilities}
                      onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-full">
              <button type="button" onClick={addExperienceField} className="px-4 py-2 border rounded-md border-gray-800">Add Experience</button>
            </div>
          </div>
        </fieldset>



        <button type="submit" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Add Maid</button>


      </form>
    </section>
  );
};

export default AddMaids;
