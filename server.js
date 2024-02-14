const express = require("express");
const app = require("./app");
const dbConnect = require("./util/dbConnect");



// connect db
dbConnect();