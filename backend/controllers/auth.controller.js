import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToke.js";

export const signup = async (req,res)=>{
    try {
        const {fullName, username, password, confirmPassword, gender } = req.body;
        
        if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

        const newUser = new User({
            fullName,
            username,
            password,
            confirmPassword,
            gender
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                gender:newUser.gender
            })
        } else {
			res.status(400).json({ error: "Invalid user data" });
		}
    } catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if(!user || !password){
            res.status(400).json({message:"Invalid username and password"});
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(201).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username
        });
        // toast.success(`${username} loggedIn successfully`);
    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}