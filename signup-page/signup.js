
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wpmhrjyktuyuhpyhxapz.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs
const supabase = createClient(supabaseUrl, supabaseKey)




let email = document.getElementById("emailInput")
let password = document.getElementById("passwordInput")
let button = document.getElementById("button")

button.addEventListener('click', async function() {
 signUp()
})

async function signUp(){


    let emailValue = email.value
    let passwordValue = password.value

    let { data, error } = await supabase.auth.signUp({
        email: emailValue,
        password: passwordValue
      })

      if (data) {
        alert("Signup compelted!")
      }

      if (error){
        alert("Something went wrong!")
      }
    }


