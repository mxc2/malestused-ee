// const mongoose = require('mongoose'); 
// mongoose.Promise = global.Promise;

// const MONGODB_URI = 'mongodb://root:root@mongo/if20?authSource=admin';
// mongoose.connect(MONGODB_URI);
  
// mongoose.connection
//     .once('open', () => console.log('Connected!'))
//     .on('error', (error) => {
//         console.warn('Error : ', error);
//     });
      
//     beforeEach((done) => {
//         mongoose.connection.collections.users.drop(() => { 
//             mongoose.connection.collections.posts.drop(() => {
//                 mongoose.connection.collections.comments.drop(() => {
//                     done(); 
//                 });
//             });    
//       });

// });