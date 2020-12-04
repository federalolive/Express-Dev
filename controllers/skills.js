const Skill = require('../models/skill');

module.exports = {
    index   
}

function index(req, res) {
    res.render('skills', {skills: Skill.getAll(), time: req.time})
}