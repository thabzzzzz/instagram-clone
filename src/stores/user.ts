import { ref } from 'vue'
import { defineStore } from 'pinia'

interface credentials {
  email: string;
  password: string;
  username: string;
}

export const useUserStore = defineStore('users', () => {
 const user = ref(null);

 const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

 const errorMessage= ref('');

 const handleLogin = ()=>{

 }

 const handleSignup = (credentials)=>{
  const {email, password, username}=credentials;
 

  if (password.length<6){
    return errorMessage.value='Password length must be atleast 6 characters'
  }

  if (username.length<4){
    return errorMessage.value='Username length must be atleast 4 characters'
  }

  if (!validateEmail(email)){
    errorMessage.value='Email is invalid'
  }
 }

 const handleLogout = ()=>{
  
 }

 const getUser = ()=>{
  
 }

  return { handleLogin, handleLogout, handleSignup, getUser, errorMessage }
})
