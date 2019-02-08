

let express= require('express')

let app =express()

let bodyParser= require('body-parser')
	
let formation = require('./models/formation')

app.set('view engine', 'ejs')
app.use('/assets',express.static('public'))




app.get('/test',(request,response)=>{

//console.log("Salut")
formation('test','encore','encore','enfin')


}
)

app.get('/',(request, response)=>{
	response.render('pages/index',{index : 'active'})
 });

app.get('/about',(request, response)=>{
	response.render('pages/about',{about : 'active'})
 });

app.get('/courses',(request, response)=>{
	response.render('pages/courses',{courses : 'active'})
 });

app.get('/events',(request, response)=>{
	response.render('pages/events',{events : 'active'})
 });

app.get('/contact',(request, response)=>{
	response.render('pages/contact',{contact : 'active'})
 });


app.listen(8080)
