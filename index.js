const express = require('express');
const { connectDB } = require('./src/config/db');
const moviesRoutes = require('./src/api/routes/movies.routes');
const actorsRoutes = require('./src/api/routes/actors.routes');
const usersRoutes = require('./src/api/routes/users.routes');

const PORT = 3000;
const server = express();

connectDB();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/v1/movies', moviesRoutes);
server.use('/api/v1/actors', actorsRoutes);
server.use('/api/v1/users', usersRoutes);


server.use('*', (req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); 
});

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
}); 

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})