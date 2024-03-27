function fetchUserData(userId, callback){
  setTimeout(()=>{
    const userData = {
        id:userId,
        username:"mohan",
        email:"mohan@yopmail.com"
    }
    callback(userData)
  },2000);
};


function logUserData(userData){
    console.log("user data:", userData)
};

fetchUserData(23456,logUserData)