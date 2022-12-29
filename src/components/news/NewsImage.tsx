import React from 'react'
interface NewsImageProps {
    
}
 
const NewsImage: React.FC<NewsImageProps> = () => {
    return ( 
        <div className='w-full news h-[50vh] flex items-end justify-center'>
            <span className='bg-[#F9F5E8] py-8 items-center justify-center flex w-1/3 text-[#082244]'>News and Events</span>
        </div>
     );
}
 
export default NewsImage;