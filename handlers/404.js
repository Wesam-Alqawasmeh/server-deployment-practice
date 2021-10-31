"use strict";

module.exports = (req, res) => {
    res.status(404).send({
        error: 404,
        message: "An error occurred!!! Path not found"
    });
};