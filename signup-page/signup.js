import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
export const supabase = createClient(supabase_url, puplic_key)


let email = document.getElementById("emailInput")
let password = document.getElementById("passwordInput")
let button = document.getElementById("button")

button.addEventListener('click', function() {
 signUp()
})

async function signUp(){

    let { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
      })

    

      email.value = ""
      password.value = ""

      console.log("Received data:", data);
      console.log("Received error:", error);

      if (error){
        alert("Error:" + error.message)
        return
      }


      if (data) {
        await logOut()
        window.location.href = "signupsucces.html"
        console.log("signup completed")
        return
      }

  

     
    }


    async function logOut() {
      let { error } = await supabase.auth.signOut()
      if (error) {
        console.log(error)
      }
    }



let currentPage = window.location.pathname 
let targetPage = '/signup-page/Signup.html'

let signupButton = document.getElementById("signupButton")

if (currentPage === targetPage) {
 signupButton.style.opacity = "0.6"
}
