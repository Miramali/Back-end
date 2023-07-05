const MentorInfo = require('../Models/MentorProfile')

//show the list of mentorInfo
const getAllMentor = (req,res,next)=>{
    MentorInfo.find()
    .then((response)=>{res.json({response})})
    .catch((error)=>{res.json({message : "error Occured!" + error})})
}

// add new mentor
const addNewMentor = (req , res , next)=>{
    let mentor = new MentorInfo({
        lookingFor : req.body.lookingFor,
        designation : req.body.designation,
        location : req.body.location,
        skills : req.body.skills ,
        avatar: req.file.fieldname,
        availableForHiring : req.body.availableForHiring,
        user : req.user._id,

    })
    console.log(mentor)

    mentor.save()
    .then((response) => {
        // res.json({message : "mentor added Successfully"})
        res.status(200).send(response)
    })
    .catch((error)=>{
        // res.json({message : "has an error in adding"})
        res.status(400).send(error)
    })
}

//get mentor by id
const getMentor =async (req,res,next)=>{
    const _id = req.params.id
    MentorInfo.findById(_id)
    .then((mentor)=>{
        if(!mentor){
            return res.status(404).send('mentor not found')
        }
        res.status(200).send(mentor)
    })
    .catch((e)=>{
        res.status(500).send(e)
    })
}





// update mentor

const updateMentor = (req, res, next) => {
    const mentorId = req.params.id;

    MentorInfo.findByIdAndUpdate(mentorId, {
        lockingFor: req.body.lockingFor,
        designation: req.body.designation,
        location: req.body.location,
        skills: req.body.skills,
        avatar: req.file ? req.file.filename : '',
        availableForHiring: req.body.availableForHiring,
    }, { new: true })
        .then(updatedMentor => {
            if (!updatedMentor) {
                return res.status(404).json({ error: 'Mentor not found.' });
            }
            res.json(updatedMentor);
        })
        .catch(error => {
            res.status(500).json({ error: 'Could not update mentor.' });
        });
};

// delete mentor
const removeMentor =async (req , res , next)=>{
    try {
        const id = req.params.id
        console.log('delete',id);
        const mentor = await MentorInfo.findByIdAndDelete(id)
        if(!mentor){
            return res.status(404).send(" i cant find this mentor to delete")
        }
        res.status(200).send(mentor)

    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = {
    addNewMentor,
    getAllMentor,
    getMentor,
    updateMentor,
    removeMentor,
};