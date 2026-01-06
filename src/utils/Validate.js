import React from 'react'

const Validate = (email,password) => {
const emailvalidate= /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
const passwordvalidate= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
if(!emailvalidate){
    return {valid:false,message:"Invalid email format"};
}
if(!passwordvalidate){
    return {valid:false,message:"Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"};
}
  return (null)
}

export default Validate 