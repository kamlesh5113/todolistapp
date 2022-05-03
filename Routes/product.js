const express = require('express');

const router = express.Router();

const { createtask, gettask, deletetodo, updatetask} = require('../Controller/productController');

router.post("/", createtask);
router.get("/", gettask);
router.put("/:id", updatetask);
router.delete("/:id", deletetodo);

module.exports = router;