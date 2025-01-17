import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba24dc16-2fc9-40c6-ab9e-f8dcfbe2a3f4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      
      event.target.reset();
    } else {
      console.log("Error", data);
     toast.error(data.message)
      setResult('');
    }
  };


  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='Contact'>
       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
       <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>

    <form onSubmit={onSubmit} className='max-w-2x1 mx-auto text-gray-600 pt-8'>
      <div className='flex flex-wrap '>
        <div className='w-full md:w-1/2 text-left'> 
          Your Name
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name' required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:p1-4'> 
          Your Email
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' name='email' placeholder='Your Email' required/>
        </div>
      </div>
      <div>
       
      </div>
      <div className='my-6 text-left'>
        Message
        <textarea className='w-full border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
         name='Message' placeholder='Message' required></textarea>
      </div>
      <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : 'Send message'}</button>
    </form>

    </motion.div>
  )
}

export default Contact
