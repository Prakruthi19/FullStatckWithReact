import React, {useEffect, useState} from "react";
import Card from './Card'
const Cards = (props) =>
{
    let courses = props.courses;
    let category = props.category;  
    const [likedcourse, setlikedcourse] = useState([]);
    function getCourses()
    {
        if (category === 'All')
        {
            let allcourses=[];
            Object.values(courses).forEach(array =>
            {
                array.forEach(coursesData =>{
                    allcourses.push(coursesData);
                })
            
            })
            return allcourses;
        }
        else
        {
            return courses[category];
        }
    }
    return(
        <div>
        {
            getCourses().map((course) =>
                <Card course = {course}
                likedcourse= {likedcourse}
                setlikedcourse = {setlikedcourse}></Card>
            )
        }
        </div>
    )
    
}

export default Cards;