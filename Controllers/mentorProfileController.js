
const Profile = require('../Models/ProfileModel')

const PostMentor = async (req, res) => {
    try {
        const mentor = new Profile({ ...req.body })
        await mentor.save()
        res.status(200).send(mentor)
    } catch (e) {
        res.status(400).send(e)
    }
}

////////////////////////////////////////////////////////////////////////////////////
// Get 

const GetMentors = async (req, res) => {
    try {
        const mentor = await Profile.find({}).populate({ path: 'user', select: '-tokens' })
        res.status(200).send(mentor)
    } catch (e) {
        res.status(500).send(e)
    }
}

/////////////////////////////////////////////////////////////////////////////////

const getById = async (req, res) => {
    try {
        const _id = req.params.id
        const mentor = await Profile.findById(_id).populate({ path: 'user', select: '-tokens' })
        if (!mentor) {
            res.status(404).send('UNABLE TO FIND Mentor')
        } else {
            res.status(200).send(mentor)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

/////////////////////////////////////////////////////////////////////////////////
// patch 

const PatchMentor = async (req, res) => {
    try {
        const _id = req.params.id
        const mentor = await Profile.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        })
        if (!mentor) {
            return res.status(404).send('No Mentor Founded')
        }
        res.status(200).send(mentor)
    }
    catch (error) {
        res.status(500).send(error)
    }
}


//////////////////////////////////////////////////////////////////////////////////

const DeleteMentor = async (req, res) => {
    try {
        const _id = req.params.id
        const mentor = await Profile.findByIdAndDelete(_id)
        if (!mentor) {
            return res.status(404).send('UNABLE TO FIND Mentor')
        }
        res.status(200).send('mentor is deleted')
    }
    catch (e) {
        res.status(500).send(e)
    }
}

module.exports = {
    PostMentor,
    DeleteMentor,
    PatchMentor,
    getById,
    GetMentors
}