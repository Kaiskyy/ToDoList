import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


// Gebruik  public anon key van supabse:  Project Setgtings > API > Project API keys > anon public
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'

// Je vind deze op: Project Setgtings > API > Project API keys > URL
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
// Create a single supabase client for interacting with your database

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
        window.location.href = "signupsucces.html"
        console.log("signup completed")
        return
      }

     
    }


