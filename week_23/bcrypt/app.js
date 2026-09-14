import {hashPassword ,checkPass ,registerUser,loginUser} from './services/userService.js';

const hash = await hashPassword("123456")
console.log(hash);

const com = await checkPass("123456" , hash)
console.log(com);
const com2 = await checkPass("99999" , hash)
console.log(com2);

const register = await registerUser("nehoray" , "123456")
console.log(register);


const user = await loginUser("123456",register.pass)
console.log(user);
