const getSleepHours = day => {
  
  
if (day === 'monday'){
  
  return 8;
  
}  else if (day === 'tuesday'){
  return 7
} else if (day === "wednesday"){
  
  return 8
  
} else if (day ==='thursday'){
  
  return 5
  
} else if (day === "friday"){
  
  return 8
  
} else if (day === 'saturday'){
  
  return 7
  
} else if (day === 'sunday'){
  
  return 8
  
} else {

  return 'error'

}
  
};



const getActualSleepHours = () => 
  
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')+ getSleepHours('sunday');


  


const getIdealSleepHours = () => {
  
  let idealHours = 7;
  return idealHours * 7;
  
}



const calculateSleepDebt = () => {
  
  let actualSleepHours = getActualSleepHours()
  
 let idealSleepHours = getIdealSleepHours()
 
 let debt = actualSleepHours - idealSleepHours
  
   if (debt == 0){
     
     return `Perfect amount of sleep, yo!`
     
   } else if (debt > 0){
     
     return `You got more sleep (${actualSleepHours} hours) than the ideal amount (${idealSleepHours}). Good job!`
     
   } else if(debt < 0){
     
     return `You got less (${actualSleepHours} hours) than ideal (${idealSleepHours}) sleep. Get some rest!`
     
   } else {
     
     return error
     
   }
 
}


calculateSleepDebt()






