const Menu=require('../../models/menu');
function homeController() {
    //factory function = return objects!!!!
    return {
        async index(req,res) {
            const foods=await Menu.find()
            
            console.log(foods);
            return res.render('home',{foods:foods});
        }
    }
};

module.exports=homeController;