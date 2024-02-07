import { Schema, Types, model } from "mongoose";

const sessionSchema = Schema(
{
    user : {type : Types.ObjectId, ref: 'ecommerce_user' , required: true},
    valid: {type : Boolean, default: true},
    userAgent: {type: String },
},
{timestamp: true, versionkey: false}
)

const sessionModel = model('ecommerce_session' ,sessionSchema)

export default sessionModel