import Book from "../models/books.model.js";
import mongoose from "mongoose";

export const addBook = async (req,res)=>{
    try {
        const { bookName, description, author, image, price } = req.body;
        const newBook = new Book({
            bookName,
            description,
            author,
            image,
            price
        });
        console.log("create new book",bookName);
        if(newBook){
            await newBook.save();
            res.status(200).json({
                _id:newBook._id,
                bookName:newBook.bookName,
                description:newBook.description,
                author:newBook.author,
                image:newBook.image,
                price:newBook.price,
            });
        }
        else{
            res.status(401).json({error:"Invalid Book Data"});
        }
    } catch (error) {
        console.log("Error is addBook Controller : ",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const getAllBooks = async (req,res)=>{
    try {
        const books = await Book.find();
        res.status(201).json({books});
    } catch (error) {
        console.log("Error in getAllBooks controller");
        res.status(400).json({message:"Internal server error"});
    }
}

export const getBooksById = async (req,res)=>{
    try {
        const bookId = req.params.id;
        const book = await Book.findOne({ _id: bookId }).populate('addedBy').exec();
    
        if (!book) {
          return res.status(404).json({ message: "Book not found" });
        }
    
        res.status(200).json(book);
      } catch (err) {
        console.error("Error fetching book:", err);
        res.status(500).json({ message: "Internal server error" });
      }
}

// export const updateBook = async (req,res)=>{
//     const id = req.params.id;
//     const {bookName, description, author, price, image} = req.body;
//     try {
//         let book = await Book.findByIdAndUpdate(id,{
//             bookName,
//             description,
//             author,
//             price,
//             image,
//         });

//         if(book){
//             await book.save();
//             res.status(201).json({
//                 _id:book._id,
//                 bookName:book.bookName,
//                 description:book.description,
//                 author:book.author,
//                 price:book.price,
//                 image:book.image,
//             })
//         }
//         else{
//             res.status(400).json({error:"Invalid user data"});
//         }
//     } catch (error) {
//         console.log("Error in updateBook controller ",error.message);
//         res.status(400).json({message:"Internal server error"});
//     }
// }

export const updateBook = async (req, res) => {
    const id = req.params.id;
    const { bookName, description, author, price, image } = req.body;

    try {
        // Validate if the id is a valid ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: "Invalid book ID" });
        }

        let book = await Book.findByIdAndUpdate(id, {
            bookName,
            description,
            author,
            price,
            image,
        });

        if (book) {
            // Optionally, you can remove the unnecessary await book.save()
            res.status(200).json({
                _id: book._id,
                bookName: book.bookName,
                description: book.description,
                author: book.author,
                price: book.price,
                image: book.image,
            });
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        console.log("Error in updateBook controller ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// export const deleteBook = async (req,res)=>{
//     const id = req.params.id;
//     try {
//         let deleteBook = await Book.findByIdAndDelete(id)
//         if(deleteBook){
//             res.status(400).json({message:"Book deleted successfully"});
//         }
//         else{
//             res.status(500).json({message:"error occured in book delete"});
//         }
//     } catch (error) {
//         console.log("Error in deleteBook controller ",error.message);
//         res.status(400).json({message:"Internal server error"});
//     }
// }

export const deleteBook = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    try {
        if (!id) {
            return res.status(400).json({ message: "Missing book ID" });
        }

        let deletedBook = await Book.findByIdAndDelete(id);
        if (deletedBook) {
            return res.status(200).json({ message: "Book deleted successfully" });
        } else {
            return res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.log("Error in deleteBook controller ", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
