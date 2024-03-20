import UserModel from "../model/userModel.js";

const homeController = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.log(error.message);
  }
};

//User Contact Controller
const ContactUserController = async (req, res) => {
  try {
    const data = await UserModel({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    if (data) {
      await data.save();
      console.log("User saved Successfully");
    }
    res.render("index");
  } catch (error) {
    console.log(error.message);
  }
};

export { homeController, ContactUserController };
