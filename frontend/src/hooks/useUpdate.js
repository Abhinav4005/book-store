import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";

const useUpdate = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Destructure 'id' from the useParams object

    const updateData = async ({ bookName, author, description, image, price }) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/updateBook/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bookName, author, description, price, image }),
            });

            const data = await res.json();
            // console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }
            console.log(data);
            if (data.updated) {
                navigate("/books", { replace: true });
            }
            localStorage.setItem("book-Store", JSON.stringify(data));
        } catch (error) {
            toast.error(error.message);
            console.log("Error in useUpdate : ", error.message);
        } finally {
            setLoading(false)
        }
    }
    return { loading, updateData };
}

export default useUpdate;
