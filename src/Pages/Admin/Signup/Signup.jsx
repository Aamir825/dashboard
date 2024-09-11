import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emptyError, setEmptyError] = useState("");

    const navigate = useNavigate();
    let userDetails = JSON.parse(localStorage.getItem("users")) ?? [];
  
    const handleSignup = () =>{
  
      if(!username || !email){
         setEmptyError("Please fill all the fields!");
         return
      }else{
        const newUser = {
          id: userDetails.length,
          name: username,
          email: email
        }
        userDetails.push(newUser);
        localStorage.setItem("users",JSON.stringify(userDetails))
        toast.success("You are Successfully Registered!");
        navigate("/login");
      }
    }
  return (
    <>
        <div className=' flex h-screen w-full bg-gradient-to-r from-[#fcddc7] to-[#f1f1f0] items-center justify-center'>
        <div className=' w-2/4 px-20'>
          <h1 className=' text-4xl font-bold uppercase tracking-wider text-slate-50'>Best UX/UI Product <br/> Ecommerce Dashboard <br/> & Admin Panel</h1>
          <p></p>
        </div>
        <div className=' w-2/5  px-20 items-center'>
          <p className=' text-red-600 text-sm'>{emptyError}</p>
          <div className=' relative'>
            <FaUserTie className=' absolute top-3 left-2 text-gray-400' size={18}/>
            <input type='text' onChange={(e)=> setUsername(e.target.value)} placeholder='enter username' required className=' w-full py-2 pl-9 outline-none mb-3 rounded-md'/>
          </div>
          <div className=' relative'>
            <MdMarkEmailRead className=' absolute top-3 left-2 text-gray-400' size={18}/>
            <input type='text' onChange={(e)=> setEmail(e.target.value)} placeholder='enter your email' required className=' w-full py-2 pl-9 outline-none rounded-md'/>
          </div>
          <div className=' relative'>
            <IoMdLock className=' absolute top-5 left-2 text-gray-400' size={18}/>
            <input type='password' onChange={(e)=> setPassword(e.target.value)} placeholder='enter your Password' required className=' w-full py-2 pl-9 outline-none my-3 rounded-md'/>
          </div>
          <button onClick={handleSignup} className=' py-2 bg-color w-full text-white rounded-md'>Sign up</button>
          <p className=' text-center my-3'>or</p>
          <button className=' py-2 bg-white w-full text-black mb-3 flex justify-center items-center rounded-md'><FcGoogle className=' mr-2' size={16}/> Continue with Google</button>
          <button className=' py-2 bg-blue-600 w-full text-white flex justify-center items-center rounded-md'><FaFacebookF className=' mr-1' size={16}/>Continue with Facebook</button>
          <p className=' text-sm text-center mt-3 text-gray-500'>Already have an account? <Link to="/login" className=' text-blue-600'>Login</Link></p>
          </div>
      </div>
    </>
  )
}

export default Signup