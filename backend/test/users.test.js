// import userSchema from '../src/models/user.model'; 
// import { connect, connection } from 'mongoose';

// // name of the database
// const url = 'mongodb://localhost:27017/Recanshop';

// beforeAll(async () => {
//     connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, err => {
//         if (err) throw err;
//         console.log('Connected to MongoDB!!!')
//     });
// });

// afterAll(async () => {
//     await connection.close();
// });

// describe('User Schema test anything', () => {

//     // user registration
//     it('Registering user', async () => {
//         const user = {
//             'username': 'Rohit Sah',
//             'email': '200112@gmail.com',
//             'password': "mko0mko0"
//         };
//         const data = await userSchema(user);
//         expect(data.username).toEqual('200112@gmail.com');
//     });
// });