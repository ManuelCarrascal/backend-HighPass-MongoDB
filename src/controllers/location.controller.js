import Country from "../models/country.model.js";
import Department from "../models/department.model.js";
import City from "../models/city.model.js";
import mongoose from "mongoose";

const getCountries = async (req, res) => {
  try {
    const countries = await Country.find().sort({ name_country: 1 });
    console.log(countries);
    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
  }
};

const ObjectId = mongoose.Types.ObjectId;

const fetchDepartmentsByCountryId = async (req, res) => {
  const { id } = req.params;

  try {
    const departments = await Department.aggregate([
      {
        $lookup: {
          from: Country.collection.name,
          localField: "country._id",
          foreignField: "_id",
          as: "country",
        },
      },
      {
        $match: {
          "country._id": new ObjectId(id),
        },
      },
    ]);

    const result = departments.map((department) => ({
      _id: department._id,
      name_department: department.name_department,
    }));
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const fetchCitiesByDepartmentId = async (req, res) => {
  const { id } = req.params;

  try {
    const cities = await City.aggregate([
      {
        $lookup: {
          from: Department.collection.name,
          localField: "department._id",
          foreignField: "_id",
          as: "department",
        },
      },
      {
        $match: {
          "department._id": new ObjectId(id),
        },
      },
    ]);

    const result = cities.map((city) => ({
      _id: city._id,
      name_city: city.name_city,
    }));
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.aggregate([
      {
        $lookup: {
          from: "countries",
          localField: "country._id",
          foreignField: "_id",
          as: "country",
        },
      },
      {
        $project: {
          _id: 1,
          name_department: 1,
          "country.name_country": 1,
        },
      },
    ]);

    const result = departments.map((department) => ({
      _id: department._id,
      name_department: department.name_department,
      name_country: department.country[0]?.name_country || "Unknown",
    }));

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

const getCityById = async (req, res) => {
  try {
    const departments = await City.aggregate([
      {
        $lookup: {
          from: "departments",
          localField: "department._id",
          foreignField: "_id",
          as: "department",
        },
      },
      {
        $lookup: {
          from: "countries",
          localField: "country._id",
          foreignField: "_id",
          as: "country",
        },
      },
      {
        $project: {
          _id: 1,
          name_city: 1,
          "department.name_department": 1,
          "country.name_country": 1,
        },
      },
    ]);

    const result = departments.map((city) => ({
      _id: city._id,
      name_city: city.name_city,
      name_department: city.department[0]?.name_department || "Unknown",
      name_country: city.country[0]?.name_country || "Unknown",
    }));

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

export {
  getCountries,
  fetchDepartmentsByCountryId,
  getAllDepartments,
  getCityById,
  fetchCitiesByDepartmentId,
};
