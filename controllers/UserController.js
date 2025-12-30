import Users from '../models/User.js';

export const index = async (req, res) => {
    const users = await Users.find();
    return res.status(200).json(users);
};

export const store = async (req, res) => {
    const userdata = new Users(req.body);

    const saveuser = await userdata.save();

    return res.status(201).json('New user created successfully');
}

export const show = async (req,res) => {

    const user = await Users.findById(req.params.id);

    return res.status(200).json(user);
}

export const update = async (req, res) => {
    const id = req.params.id;
        // Check if the user with the given id exists
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message : "User not found."})
        }
        // Update the user data and return the updated user
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateUser);
}

export const deleteItem = async (req, res) => {

    const id = req.params.id;
        // Check if the user with the given id exists
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : " User Not Found. "})
        }
        // Delete the user from the database
        await User.findByIdAndDelete(id);
        // Send a success response
        res.status(201).json({message : " User deleted Successfully."})

}