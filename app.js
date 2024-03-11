
const request = require("request")



const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=yamen"

request ({url , json : true  } , (error , response) => {
  console.log(response.body)
    if (error) {
        console.log("ERROR HAS OCCURED")
    } else if (response.body.error){
        console.log(response.body.error.message)
    }else {
        console.log(response.body.location.name ,response.body.current.condition.text)
    }
})



 




  
  


