
exports.handler = async(event) => {
  var { initializeApp }  = require('firebase')
  
  var firebaseApp = initializeApp({
    apiKey: 'AIzaSyAdJjqCOov7Fdk59CyCMWxLYQcfP4ibPuo',
    authDomain: 'getbottle.firebaseapp.com',
    databaseURL: 'https://getbottle.firebaseio.com',
    projectId: 'getbottle',
    storageBucket: 'getbottle.appspot.com',
    messagingSenderId: '580814106763'
  });
  
  var db = firebaseApp.database()

  db.ref('/Tests/' ).push({
    test: 'helloworld'
  }).then(result => {
    console.log('berhasil push ke firebase')
    return 'hello from lambda'
  }).catch(err => {
    console.log('gagal push', err)
  })
}
