import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


// Gebruik  public anon key van supabse:  Project Setgtings > API > Project API keys > anon public
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'

// Je vind deze op: Project Setgtings > API > Project API keys > URL
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
// Create a single supabase client for interacting with your database

export const supabase = createClient(supabase_url, puplic_key)


let myDetailsButton = document.getElementById("myDetails1")
let myDetails = document.getElementById("myDetails")
let comingSoonButton = document.getElementById("comingSoon1")

myDetailsButton.addEventListener("click", function(){
    myDetails.style.display = 'block'
    comingSoon.style.display = "none"
})

comingSoonButton.addEventListener("click", function(){
    comingSoon.style.display = "block"
    myDetails.style.display = "none"
})

getuserFunction()

async function getuserFunction(){
const { data: { user } } = await supabase.auth.getUser()

if (user) {
    let emailSpawner = document.getElementById("emailadresSpawner")
    emailSpawner.appendChild(user)
}
}


   
 
