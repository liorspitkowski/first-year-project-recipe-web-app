/*
    Written by Hanmin Liu;
    when user enter the index page, check if the user has a cookie, and force logged in as a guest user if not;
    Allow users log out. By setting cookie to guestuser
*/
function checkIndexUser() {
    let user_name = getCookie('username');
    let user_id = getCookie('userid');
    console.log(user_name + ' ' + user_id);
    if (user_id == '' || user_name == '') {
        initializeGuest();
        document.getElementById('currentuser').innerHTML = "Welcome back! Guest user.";
    } else if (user_id == '1') {
        document.getElementById('currentuser').innerHTML = "Welcome back! Guest user.";
    } else {
        let MorG = document.getElementById('changeButton');
        changeGuest(MorG);
        addLogoutBu(user_name);
    }
}

function changeGuest(button) {
    document.getElementById('changeButton_p').innerHTML = 'Menu';
}

function addLogoutBu(username) {
    let parentd = document.getElementById('currentuser');
    parentd.innerHTML = "Welcome back! " + username + ".";
    let button = document.createElement('button');
    button.id = 'logout';
    button.innerHTML = "Logout";
    button.addEventListener('click', function(e) {
        e.preventDefault();
        GuestLogin();
        window.location.reload();
    });
    parentd.appendChild(button);
}

function GuestLogin() {
    setCookieasGuest();
}

function initializeGuest() {
    setCookieasGuest();
}

function setCookieasGuest() {
    console.log("setting guestuser");
    document.cookie = "username=guestUser; expires=18 Dec 2025 12:00:00 UTC; path=/;";
    document.cookie = "userid=1; expires=18 Dec 2025 12:00:00 UTC; path=/;";
}