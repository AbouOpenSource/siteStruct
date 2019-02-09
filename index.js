

let express= require('express')

let app =express()

		let Formation = require('./models/formation')

let bodyParser= require('body-parser')
	
let formation = require('./models/formation')

app.set('view engine', 'ejs')
app.use('/assets',express.static('public'))




app.get('/test',(request,response)=>{

		let item = new Formation("test","test","test","salut")


		Formation.create(item);
		response.render('pages/index')
})














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
