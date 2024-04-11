import React,{useState} from 'react';
import useUpdate from '../hooks/useUpdate';

const EditBook = () => {
    const [input,setInput] = useState({
        bookName:"",
        author:"",
        description:"",
        price:"",
        image:""
    });

    const {loading, updateData} = useUpdate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await updateData(input);
        setInput({
            bookName:"",
            author:"",
            description:"",
            price:"",
            image:""
        })
    } 
  return (
    <div className="container mx-auto px-4">
      <h2 className=" flex justify-center text-3xl mt-2 text-rose-800 font-semibold">Edit Book</h2>
      <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bookName" className="block text-white">Book Name</label>
          <input 
          type="text" 
          id="bookName" 
          placeholder="Enter your book name" 
          required 
          value={input.bookName}
          onChange={(e)=>setInput({...input, bookName:e.target.value})}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-white">Author</label>
          <input 
          type="text" 
          id="author" 
          name="author" 
          placeholder="Enter author name" 
          required 
          value={input.author}
          onChange={(e)=>setInput({...input, author:e.target.value})}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white">Description</label>
          <textarea 
          id="description" 
          name="description" 
          placeholder="Enter description" 
          required 
          value={input.description}
          onChange={(e)=>setInput({...input, description:e.target.value})}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-white">Image</label>
          <input 
          type="text" 
          id="image" 
          name="image" 
          placeholder="Enter image URL" 
          required
          value={input.image}
          onChange={(e)=>setInput({...input,image:e.target.value})}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-white">Price</label>
          <input 
          type="number" 
          id="price" 
          name="price" 
          placeholder="Enter price of book"
          required
          value={input.price}
          onChange={(e)=>setInput({...input, price:e.target.value})} 
          className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none" />
        </div>
        {/* <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex justify-center items-center">
          Submit
        </button> */}
        <div>
            <button type='submit' className="bg-blue-500 text-white hover:bg-blue-600 hover:text-gray-100 py-1 px-4 rounded-full mt-2 border border-blue-500 text-sm disabled:opacity-50" disabled={loading}>
                {loading ? <span className="animate-spin mr-1 h-4 w-4 border-b-2 border-white rounded-full inline-block"></span> : "Edit Book"}
            </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
