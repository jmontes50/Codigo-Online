const axios = require('axios'); 

axios.get("https://5f4845dd95646700168da4a8.mockapi.io/Fotos")
.then(respuesta => {
  console.log(respuesta)
}).catch(err => console.log(err))
