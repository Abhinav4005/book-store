import express from "express";
import { addBook, deleteBook, getAllBooks, getBooksById, updateBook } from "../controllers/addBook.controller.js";

const router = express.Router();

router.post("/add",addBook);

router.get("/getAllBooks",getAllBooks);

router.get("/getBooks/:id",getBooksById);

router.put("/updateBook/:id",updateBook);

router.delete("/deleteBook/:id",deleteBook);

export default router;