import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
export const supabase = createClient(supabase_url, puplic_key)




let signoutButton = document.getElementById("biglogoutButton")

signoutButton.addEventListener("click", async function(){


const { data: { user } } = await supabase.auth.getUser()

if (!user) {
    alert("You are already logged out!")
    return
}


let { error } = await supabase.auth.signOut()

if (error) {
    alert(error)
}

else {
    window.location = "signoutsucces.html"
}
})




let currentPage = window.location.pathname 
let targetPage = '/signout-page/signout.html'

let signoutButtonn = document.getElementById("signoutButton")

if (currentPage === targetPage) {
 signoutButtonn.style.opacity = "0.6"
}