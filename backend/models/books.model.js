import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        description:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
            unique:true
        },
        bookName:{
            type:String,
            required:true,
            unique:true,
        },
        image:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        addedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps:true,
    }
);

const Book = mongoose.model("Book",bookSchema);
export default Book;