import React from 'react'
interface ProgImageProps {
    
}
 
const ProgImage: React.FC<ProgImageProps> = () => {
    return ( 
        <div className='w-full prog h-[90vh] flex items-end justify-center'>
            <span className='text-[#082244] bg-[#F9F5E8] py-8 items-center justify-center flex w-1/3'>Our Programs</span>
        </div>
     );
}
 
export default ProgImage;