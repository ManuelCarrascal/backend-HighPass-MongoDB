import Artist from "../models/artist.model.js";
import bcript from "bcryptjs";
import moment from "moment";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  console.log(req.body);
  const {
    username,
    names,
    lastnames,
    email,
    password,
    phone,
    birthdate,
    country,
    department,
    city,
  } = req.body;
  try {
    const passwordHash = await bcript.hash(password, 10);
    const birthdateObject = moment(birthdate, "DD/MM/YYYY").toDate();

    const newArtist = new Artist({
      username,
      names,
      lastnames,
      email,
      password: passwordHash,
      phone,
      birthdate: birthdateObject,
      country,
      department,
      city,
    });

    const artistSaved = await newArtist.save();
    const token = await createAccessToken({ id: artistSaved._id });

    res.cookie("token", token);
    res.json({
      id: artistSaved._id,
      username: artistSaved.username,
      names: artistSaved.names,
      lastnames: artistSaved.lastnames,
      email: artistSaved.email,
      phone: artistSaved.phone,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await Artist.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcript.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      names: userFound.names,
      lastnames: userFound.lastnames,
      email: userFound.email,
      phone: userFound.phone,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await Artist.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    names: userFound.names,
    lastnames: userFound.lastnames,
    email: userFound.email,
    phone: userFound.phone,
  });
};
