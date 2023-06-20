import Artist from "../models/artist.model.js";
import Project from "../models/project.model.js";

const getCountArtist = async (req, res) => {
  try {
    const response = await Artist.countDocuments();
    return res.status(200).json({ total_artistas: response });
  } catch (error) {
    console.log(error);
  }
};

const getCountProject = async (req, res) => {
  try {
    const response = await Project.countDocuments();
    return res.status(200).json({ total_proyectos: response });
  } catch (error) {
    console.log(error);
  }
};

export { getCountArtist, getCountProject };
