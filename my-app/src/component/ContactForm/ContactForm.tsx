
// import React, { useState } from 'react';
// import axios from 'axios'
//  const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
 
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
 
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // You can handle the form submission here, e.g., by sending the data to a server.
//     console.log(formData);
 
//   axios({
 
//             method: 'post',
//              url: 'http://localhost:3000/formdata',
//              data: formData
//            }) .then(function (response) {
//              console.log(response); 
//           })
//           .catch(function (error) {
//             console.log(error);
//           });}
//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto' }}>
//       <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ margin: '10px 0' }}>
//           <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ margin: '10px 0' }}>
//           <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ margin: '10px 0' }}>
//           <label htmlFor="phone" style={{ display: 'block', fontWeight: 'bold' }}>
//             phone
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//              placeholder='phone number'
 
//             pattern="[1-9]{1}[0-9]{9}"
 
//             maxLength={10}
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ margin: '10px 0' }}>
//           <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ margin: '10px 0' }}>
//           <button type="submit" style={{ backgroundColor: '#0074cc', color: '#fff', padding: '10px 20px', border: 'none' }}>
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
 
// export default ContactForm;
 
 
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
 
    name: '',
    email: '',
    number: '',
    message: '',
 
  });
 
  const [errors, setErrors] = useState({
 
    name: '',
    email: '',
    number: '',
    message: '',
 
  });
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the corresponding error when the input changes
 
    setErrors({
      ...errors,
      [name]: '',
    });
 
  };

  const validateForm = () => {
    let valid = true;
     const newErrors = { name: '', email: '', number: '', message: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
   }
     if (!formData.number.trim()) {
      newErrors.number = 'Number is required';
     valid = false;
     }
 
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
      valid = false;
    }
    if (!formData.message.trim()) {
     newErrors.message = 'Message is required';
      valid = false;
    }
  
    setErrors(newErrors);
    return valid;
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      try {
      //  const response = await axios.post('http://localhost:3000/contactform', formData);
       const response = await axios.post('http://localhost:4561/api/contact', formData);
        console.log(response.data);
         toast.success('Form submitted successfully', {
          position: 'bottom-right',
          autoClose: 3000,
        });
 
   // Reset the form fields after a successful submission
        setFormData({
          name: '',
         email: '',
          number: '',
          message: '', 
        });
 
      } catch (error) {
   console.error('Error sending form data:', error);
         toast.error('An error occurred while submitting the form', {
  position: 'bottom-right',
          autoClose: 3000,
        });
 
      }
 
    } else {
 
      toast.error('Please fill in all required fields correctly', {
        position: 'bottom-right',
        autoClose: 3000,
      });
 
    }
 
  };
 
 
 
  // Initially, show a toast message when the component first renders
 
  useEffect(() => {
    toast.info('Please note: All fields are mandatory.', {
      position: 'bottom-left',
      autoClose: 3000,
    });
 
  }, []);
 
 
 
  // Initially, the button is disabled and the background color is gray
 
  const isSubmitDisabled = !formData.name.trim() || !formData.number.trim() || !formData.email.trim() || !formData.message.trim();
 
  const buttonStyle: React.CSSProperties = {
 
    backgroundColor: isSubmitDisabled ? 'gray' : '#0074cc',
 
    color: isSubmitDisabled ? 'white' : 'white',
 
    padding: '10px 20px',
 
    border: 'none',
 
  };
 
 
 
  return (
 
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
 
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
 
      <form onSubmit={handleSubmit}>
 
        <div style={{ margin: '10px 0' }}>
 
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
 
            Name
 
          </label>
 
          <input
 
            type="text"
 
            id="name"
 
            name="name"
 
            value={formData.name}
 
            onChange={handleChange}
 
            required
 
            style={{ width: '100%', padding: '8px' }}
 
          />
 
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
 
        </div>
 
        <div style={{ margin: '10px 0' }}>
 
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
 
            Email
 
          </label>
 
          <input
 
            type="email"
 
            id="email"
 
            name="email"
 
            value={formData.email}
 
            onChange={handleChange}
 
            required
 
            style={{ width: '100%', padding: '8px' }}
 
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
 
            title="Enter a valid email address"
 
          />
 
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
 
        </div>
 
        <div style={{ margin: '10px 0' }}>
 
          <label htmlFor="number" style={{ display: 'block', fontWeight: 'bold' }}>
 
            Number
 
          </label>
 
          <input
 
            type="text"
 
            id="number"
 
            name="number"
 
            value={formData.number}
 
            onChange={handleChange}
 
            required
 
            style={{ width: '100%', padding: '8px' }}
 
          />
 
          {errors.number && <span style={{ color: 'red' }}>{errors.number}</span>}
 
        </div>
 
        <div style={{ margin: '10px 0' }}>
 
          <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
 
            Message
 
          </label>
 
          <textarea
 
            id="message"
 
            name="message"
 
            value={formData.message}
 
            onChange={handleChange}
 
            required
 
            style={{ width: '100%', padding: '8px' }}
 
          />
 
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
 
        </div>
 
        <div style={{ margin: '10px 0' }}>
 
          <button
 
            type="submit"
 
            style={buttonStyle}
 
            disabled={isSubmitDisabled}
 
          >
 
            Submit
 
          </button>
 
        </div>
 
      </form>
 
 
 
      <ToastContainer/>
 
    </div>
 
  );
 
};
 
 
 
export default ContactForm;

