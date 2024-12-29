import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import {FcLikePlaceholder} from "react-icons/fc";
import { FcLike } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = (props)=>{
    let likedcourse = props.likedcourse;
    let setlikedcourse = props.setlikedcourse;
    let course = props.course;
    function handlelike()
    {
        if(likedcourse.includes(course.id))
        {
            setlikedcourse((prev) => prev.filter((cid) =>(cid!=course.id)));
            toast.warning('DISLIKED THE COURSE');
        }
        else{
            if (likedcourse.length ==0)
                setlikedcourse([course.id]);
            else
            {
                setlikedcourse((prev) => [...prev,course.id]);
            }
            toast.success('Course liked');
        }
    }
    return(
        <div className="w-[300px] bg=bgDark bg=opacity-80 rounded-md">
            <div className="relative">
                <img src ={course.image.url}></img>
            
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-6 bottom-[-12px]
            grid place-items-center ">

            <button onClick={handlelike}>
                {
                    likedcourse.includes(course.id)? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                }
            </button>
            </div>
            </div>
 
        <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2 text-white">{course.description.length > 100 ? 
            (course.description.substr(0,100)+"..."):
            (course.description)}</p>
        </div>
        </div>
    )

}

export default Card;