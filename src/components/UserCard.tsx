import React from "react";
import { User } from "../@types/types";

const UserCard:React.FC<User>=({name,age,profileImage,profession})=>{
    return (
        <div className="flex p-6 flex-col items-center space-y-3 shadow-md bg-white rounded hover:shadow-xl border border-gray-500 hover:border-blue-500 transition-all duration-200">
            <img src={profileImage} alt={name} className="w-24 h-24 rounded-full"/>
            <h1 className="text-xl font-semibold">{name}</h1>
            <div className="flex items-center space-x-4">
                <p>{profession}</p>
                <p>{age}</p>
            </div>
        </div>
    )
}

export default UserCard;