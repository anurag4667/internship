import express from "express";
import { add_data, getalldata, getbycountry, getbyregion, getbysector, getbysource, getbytopic, getbyyear } from "../controllers/data.js";

const router = express.Router();


router.route("/add_data").post(add_data);
router.route("/get_data").get(getalldata);
router.route("/get_data/endyear/:endYear").get(getbyyear);
router.route("/get_data/topics/:topic").get(getbytopic);
router.route("/get_data/sectors/:sector").get(getbysector);
router.route("/get_data/regions/:region").get(getbyregion);
router.route("/get_data/countries/:country").get(getbycountry);
router.route("/get_data/sources/:source").get(getbysource);
export default router;
