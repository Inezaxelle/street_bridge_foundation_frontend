import React from 'react'
interface AboutImageProps {
    
}
 
const AboutImage: React.FC<AboutImageProps> = () => {
    return ( 
        <div className='w-full about h-[50vh] flex items-end justify-center'>
            <span className='bg-[#F9F5E8] py-8 items-center justify-center flex w-1/3 text-[#082244]'>About Street Bridge Foundation</span>
        </div>
     );
}
 
export default AboutImage;