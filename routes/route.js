const express = require("express")
const router = new express.Router()
const ExpressError = require("../expresserror")
const db = require('../db')
const jsonschema = require('jsonschema')



router.get("/", async function(req, res, next) {
   try {
   } catch(e) {
      return next(e)
   }
})

router.get("/:id", async function (req, res, next) {
   try {
   } catch(e) {
      return next(e)
   }
})

router.post("/", async function (req, res, next) {
   try {
   } catch(e) {
      return next(e)
   }
})

router.patch("/:id", async function (req, res, next) {
   try {
   } catch(e) {
      return next(e)
   }
})

router.delete("/:id", async function (req, res, next) {
   try {
   } catch(e) {
      return next(e)
   }
})

module.exports = router;