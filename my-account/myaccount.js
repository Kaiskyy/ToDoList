import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const public_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWhyanlrdHV5dWhweWh4YXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzkwMjksImV4cCI6MjAzNDY1NTAyOX0.Nk7Fzz0tZaY9lmYFHe9Q5LNX8QdRz_vMnAHJ8HvyqCs';
const supabase_url = 'https://wpmhrjyktuyuhpyhxapz.supabase.co';
export const supabase = createClient(supabase_url, public_key);

document.addEventListener('DOMContentLoaded', () => {
    getuserFunction();
    test();
});

async function getuserFunction() {
    try {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            const userEmail = document.createTextNode(user.email);
            const emailSpawner = document.getElementById("emailadresSpawner");
            if (emailSpawner) {
                emailSpawner.appendChild(userEmail);
            }
        }
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

async function test() {
    const currentPage = window.location.pathname;
    const targetPage = '/my-account/myaccount.html';
    const myaccountButton = document.getElementById("myaccButton");
    const myDetails1 = document.getElementById("myDetails1");

    try {
        if (currentPage === targetPage) {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                const notloggedinText = document.getElementById("notloggedinText");
                if (notloggedinText) {
                    notloggedinText.style.display = "block";
                }
                const bodyElements = document.getElementById("bodyelementsId");
                if (bodyElements) {
                    bodyElements.style.opacity = "0.4";
                }
            }
        }

        if (currentPage === targetPage && myaccountButton) {
            myaccountButton.style.opacity = "0.6";
        }

        if (currentPage === targetPage && myDetails1) {
            myDetails1.style.opacity = "0.4";
        }

        const myDetailsButton = document.getElementById("myDetails1");
        const myDetails = document.getElementById("myDetails");
        const comingSoon = document.getElementById("comingSoon");
        const comingSoonButton1 = document.getElementById("comingSoon1");
        const comingSoonButton2 = document.getElementById("comingSoon2");
        const comingSoonButton3 = document.getElementById("comingSoon3");

        if (myDetailsButton && myDetails && comingSoon) {
            myDetailsButton.addEventListener("click", function() {
                myDetails.style.display = 'block';
                comingSoon.style.display = "none";
                myDetails1.style.opacity = "0.4";
            });
        }

        if (comingSoonButton1 && comingSoon && myDetails) {
            comingSoonButton1.addEventListener("click", function() {
                comingSoon.style.display = "block";
                myDetails.style.display = "none";
                myDetails1.style.opacity = "1";
            });
        }

        if (comingSoonButton2 && comingSoon && myDetails) {
            comingSoonButton2.addEventListener("click", function() {
                comingSoon.style.display = "block";
                myDetails.style.display = "none";
                myDetails1.style.opacity = "1";
            });
        }

        if (comingSoonButton3 && comingSoon && myDetails) {
            comingSoonButton3.addEventListener("click", function() {
                comingSoon.style.display = "block";
                myDetails.style.display = "none";
                myDetails1.style.opacity = "1";
            });
        }

    } catch (error) {
        console.error('Error in test function:', error);
    }
}
