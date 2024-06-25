import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
export const supabase = createClient(supabase_url, puplic_key)


let email = document.getElementById("emailInput")
let password = document.getElementById("passwordInput")
let button = document.getElementById("button")

button.addEventListener('click', async function() {
    const { data: { user } } = await supabase.auth.getUser() 
    if(user) {
        alert("You are already logged in!")
    }
 else {
    login()
 }
})




async function login(){

  
let { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
   

      console.log("Received data:", data);
      console.log("Received error:", error);


      if (error){
        alert(error.message)
        
      }

      if (data) {
        console.log("login completed")
        
      }

      
const { data: { user } } = await supabase.auth.getUser()

if (user) {
    window.location.href = "loginsucces.html"
}

    }


    let currentPage = window.location.pathname 
    let targetPage = '/login-page/login.html'

    let loginButton = document.getElementById("loginButton")

    if (currentPage === targetPage) {
     loginButton.style.opacity = "0.6"
    }

    