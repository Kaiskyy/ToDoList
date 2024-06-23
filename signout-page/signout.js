import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


// Gebruik  public anon key van supabse:  Project Setgtings > API > Project API keys > anon public
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'

// Je vind deze op: Project Setgtings > API > Project API keys > URL
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
// Create a single supabase client for interacting with your database

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