import React,{useEffect,useState} from 'react'
import axios from "axios";
import BooksSection from './BooksSection';

const Books = () => {
    const [data,setData] = useState();
    // console.log(data?.books);
    useEffect(()=>{
        const fetch = async ()=>{
            await axios.get("http://localhost:8000/api/getAllBooks").then((res)=>setData(res.data.books));
        };
        fetch();
    })
  return (
    <div>
      <div className='flex justify-center items-center py-3 mt-8'>
        <h1 className='text-white text-3xl'>Book Section</h1>
      </div>
      <BooksSection data={data}/>
    </div>
  )
}

export default Books;