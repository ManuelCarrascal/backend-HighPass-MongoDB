import Artist from "../models/artist.model.js";

export const getArtistas = async (req, res) => {
  try {
    const artistas = await Artist.find({});
    return res.status(200).json(artistas);
  } catch (error) {
    console.error(error);
  }
};
