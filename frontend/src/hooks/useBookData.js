import React, { useState } from 'react';
import toast from 'react-hot-toast';

const useBookData = () => {
    const [loading, setLoading] = useState(false);

    const bookData = async ({ bookName, author, description, price, image }) => {
        setLoading(true); // Set loading to true when starting the request
        try {
            const res = await fetch("/api/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bookName, author, description, price, image }),
            });

            const data = await res.json();
            console.log(data);

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("book-Store", JSON.stringify(data));
        } catch (error) {
            toast.error(error.message);
            console.log("Error: Error in useBook ", error.message);
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    return { loading, bookData };
};

export default useBookData;