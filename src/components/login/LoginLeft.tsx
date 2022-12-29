import React from 'react'
import logo from "../../images/sbf_logo.svg"
interface LoginLeftProps {
    
}
 
const LoginLeft: React.FC<LoginLeftProps> = () => {
    return ( 
        <div className='w-1/3 h-screen bg-[#F9F5E8] pt-12 md:block hidden'>
            <img src={logo} alt="" className='mx-auto' />
        </div>
     );
}
 
export default LoginLeft;