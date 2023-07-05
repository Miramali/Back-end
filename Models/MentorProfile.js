const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
    lookingFor:{
        type : String ,
        required:true
    },
    designation:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true
    },
    skills :{
        type: Array ,
        default:[ ],
        required:true
    },
    avatar :{
        type : String 
    },
    availableForHiring :{
        type: Boolean,
        default: false
    },
    user:{
        type: mongoose.Types.ObjectId ,
        ref : "User",
        required: true
    }
    

},{timestamps:true})


const MentorInfo = mongoose.model('MentorInfo', MentorSchema);

module.exports = MentorInfo;