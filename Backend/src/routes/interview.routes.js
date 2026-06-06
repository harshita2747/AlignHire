const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require ("../middlewares/file.middleware")

const interviewRouter = express.Router()


/**
 * @route POST /api/interview
 * @description genrates new interview report on the bais of user self description resume pdf and job descrition.
 * @access private
 */
interviewRouter.post("/", authMiddleware.authUser,upload.single("resume"),interviewController.generateInterviewReportController)

module.exports = interviewRouter