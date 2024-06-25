import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs'
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
export const supabase = createClient(supabase_url, puplic_key)


let currentPage = window.location.pathname 
let targetPage = '/my-account/myaccount.html';

//if (currentPage === targetPage) {
    //const { data: { user } } = await supabase.auth.getUser()
    
  //  if (!user) {
  //     let notloggedinText = document.getElementById("notloggedinText")
  //     notloggedinText.style.display = "block" 
  //     let bodyElements = document.getElementById("bodyelementsId")
  //     bodyElements.style.opacity = "0.4"
 //   }
//}


let myDetailsButton = document.getElementById("myDetails1")
let myDetails = document.getElementById("myDetails")
let comingSoonButton1 = document.getElementById("comingSoon1")
let comingSoonButton2 = document.getElementById("comingSoon2")
let comingSoonButton3 = document.getElementById("comingSoon3")

myDetailsButton.addEventListener("click", function(){
    myDetails.style.display = 'block'
    comingSoon.style.display = "none"
})


comingSoonButton1.addEventListener("click", function(){
    comingSoon.style.display = "block"
    myDetails.style.display = "none"
})

comingSoonButton2.addEventListener("click", function(){
    comingSoon.style.display = "block"
    myDetails.style.display = "none"
})

comingSoonButton3.addEventListener("click", function(){
    comingSoon.style.display = "block"
    myDetails.style.display = "none"
})

getuserFunction()

async function getuserFunction(){
const { data: { user } } = await supabase.auth.getUser()

if (user) {

    let userEmail = document.createTextNode(user.email)

    let emailSpawner = document.getElementById("emailadresSpawner")
      emailSpawner.appendChild(userEmail)
}
}




   
 
