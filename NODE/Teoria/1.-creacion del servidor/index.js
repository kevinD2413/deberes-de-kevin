const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("mongoose");


const app = express();


dotenv.config();


connect();


