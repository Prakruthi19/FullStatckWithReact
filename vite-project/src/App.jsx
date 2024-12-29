import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { apiurl , filterData} from './data'

function App() {
  const [loading, setloading] = useState(true);
  const [courses, setCourses] = useState({});
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchdata() {
    setloading(true);
    try{
      let response = await fetch(apiurl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      console.log("ERROR");

    }
    setloading(false);
  }
  useEffect(() =>{
    fetchdata(); }, []);
  return (
    <>
    {/* <div className='bg-bgDark2'>
          <h1 className="text-10xl font-bold underline">
          Hello from vite project world!
        </h1>
        </div> */}
     
    <div className='min-h-screen flex flex-col bg-bgDark2'>
    <div>
      <NavBar/>
    </div>
    <div className='bg-bgDark2'>
    <Filter
    filterData = {filterData}
    category = {category}
    setCategory = {setCategory}
    />
    </div>
  <div className = "w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"> 
    { loading? <Spinner/> :<Cards courses = {courses} category = {category}></Cards>}
    </div>
    </div>

    </>
  )
};

export default App
