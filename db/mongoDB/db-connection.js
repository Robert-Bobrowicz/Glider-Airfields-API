import mongoose from "mongoose";
import { dbUrl } from '../../config.js';

mongoose.connect(dbUrl);