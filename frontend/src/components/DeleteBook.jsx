import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const DeleteBook = () => {
    const {id}  = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:8000/api/deleteBook/${id}`)
            .then(res => {
                console.log("Response data:", res.data.deleted);
                if (res.data) {
                    navigate("/books");
                } else {
                    toast.error("Failed to delete the book.");
                }
            })
            // .catch(error => {
            //     toast.error("An error occurred while deleting the book.");
            //     console.error("Error in deleteBook:", error.message);
            // });
    }, 
    [id, navigate]);

};

export default DeleteBook;