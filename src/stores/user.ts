import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', () => {
 const user = ref(null);

 const handleLogin = ()=>{

 }

 const handleSignup = (credentials)=>{
  const {email, password, username}=credentials;
  const errorMessage= ref('');

  if (password.length<6){
    return errorMessage.value='Password length is too short'
  }

 }

 const handleLogout = ()=>{
  
 }

 const getUser = ()=>{
  
 }

  return { handleLogin, handleLogout, handleSignup, getUser }
})
