import Data from "../models/data.js";
const add_data = async (req,res)=>{
    
    try {
        const data = req.body;
        const createdata = await Data.create(data);

        res.status(200).json({
            success : true,
            message : "data added",
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

const getalldata = async (req,res) =>{

    try {
        const data = await Data.find();

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

const getbyyear = async (req,res) =>{
    try {
        const endYear = req.params.endYear;

        const data = await Data.find({
            end_year : {$lte : endYear}
        })

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

const getbytopic = async (req,res) =>{
    try {
        const topic = req.params.topic;

        const data = await Data.find({
            topic
        })

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

const getbyregion = async (req,res) =>{
    try {
        const region = req.params.region;

        const data = await Data.find({
            region
        })

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

const getbysector = async (req,res) =>{
    try {
        const sector = req.params.sector;

        const data = await Data.find({
            sector,
        })

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

const getbycountry = async (req,res) =>{
    try {
        const country = req.params.country;

        const data = await Data.find({
            country,
        })

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}
const getbysource = async (req,res) =>{
    try {
        const source = req.params.source;

        const data = await Data.find({
            source,
        })

        res.status(200).json({
            success : true,
            data,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}
export {add_data,getalldata,getbyyear,getbytopic,getbyregion,getbysector,getbycountry,getbysource};