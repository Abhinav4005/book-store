import React, { useState } from 'react';
import useBookData from '../hooks/useBookData';

const AddBooks = () => {
    const [input, setInput] = useState({
        bookName: "",
        author: "",
        description: "",
        price: "",
        image: ""
    });

    const { loading, bookData } = useBookData();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await bookData(input);
        setInput({
            bookName: "",
            author: "",
            description: "",
            price: "",
            image: ""
        });
    }

    return (
        <div className="container mx-auto px-4 mb-4">
            <h2 className="text-center text-3xl mt-2 text-rose-800 font-semibold">Add Books</h2>
            <form className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="bookName" className="block text-gray-700">Book Name</label>
                    <input
                        type="text"
                        id="bookName"
                        placeholder="Enter your book name"
                        required
                        value={input.bookName}
                        onChange={(e) => setInput({ ...input, bookName: e.target.value })}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Enter author name"
                        required
                        value={input.author}
                        onChange={(e) => setInput({ ...input, author: e.target.value })}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        required
                        value={input.description}
                        onChange={(e) => setInput({ ...input, description: e.target.value })}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700">Image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Enter image URL"
                        required
                        value={input.image}
                        onChange={(e) => setInput({ ...input, image: e.target.value })}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price of book"
                        required
                        value={input.price}
                        onChange={(e) => setInput({ ...input, price: e.target.value })}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="animate-spin mr-1 h-4 w-4 border-b-2 border-white rounded-full inline-block"></span>
                    ) : (
                        "Submit"
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddBooks;
