

let express= require('express')

let app =express()

		let Formation = require('./models/formation')

let bodyParser= require('body-parser')
	
let formation = require('./models/formation')

app.set('view engine', 'ejs')
app.use('/assets',express.static('public'))




app.get('/test',(request,response)=>{

		let item = new Formation("test","test","test","salut")


		Formation.writeNewFormation(item);
		Formation.all();
		response.render('pages/index')
	})



app.get('/',(request, response)=>{
	response.render('pages/index',{page : 'index'})
 });


app.get('/teacher',(request, response)=>{
	response.render('pages/teacher',{page : 'teacher'})
 });
app.get('/about',(request, response)=>{
	response.render('pages/about',{page : 'about'})
 });

app.get('/courses',(request, response)=>{
	response.render('pages/courses',{page : 'courses'})
 });

app.get('/events',(request, response)=>{
	response.render('pages/events',{page : 'events'})
 });

app.get('/contact',(request, response)=>{
	response.render('pages/contact',{page : 'contact'})
 });


app.get('/research',(request, response)=>{
	response.render('pages/research',{page : 'research'})
 });

app.get('/event',(request, response)=>{
	response.render('pages/event-single',{page : 'event'})
 });

app.get('/course',(request, response)=>{
	response.render('pages/course-single',{page : 'courses'})
 });
app.get('/scholarship',(request, response)=>{
	response.render('pages/scholarship',{page : 'scholarship'})
 });
app.get('/notice',(request, response)=>{
	response.render('pages/notice',{page : 'notice'})
 });
app.get('/notice-single',(request, response)=>{
	response.render('pages/notice-single',{page : 'notice-single'})
 });


app.listen(8080)
