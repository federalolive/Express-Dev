const skills = [
    {skill: 'Troubleshooting', done: true},
    {skill: 'Javascript', done: true},
    {skill: 'CSS', done: true},
    {skill: 'C++', done: true},
    {skill: 'C#', done: true},
    {skill: 'Python', done: true},
    {skill: 'Ruby on Rails', done: true},
    {skill: 'React', done: true},
    {skill: 'ASP.NET', done: true},
    {skill: 'C', done: true},
    {skill: 'Perl', done: true},
    {skill: 'Java', done: true},
    {skill: 'SQL', done: true},
]

module.exports = {

    getAllSkills,
    getOne,
    create,
    deleteOne,
    update
    
    }
    
    function getAllSkills(){
        return skills;
    }
    
    function getOne(id){
        return skills.find(skill => skill.id === parseInt(id));
    }
    
    function create(skill){
        skill.id = Date.now() % 1000000;
        skill.done = false;
        skills.push(skill);
    }
    
    function deleteOne(id){
        const idx = skills.findIndex(skill => skill.id === parseInt(id))
        skills.splice(idx, 1)
    }
    
    function update(id, newSkill){
        const idx = skills.findIndex(skill => skill.id === parseInt(id))
        skills[idx].skill = newSkill.skill
        skills[idx].done = newSkill.done === 'on' ? true : false
    }
