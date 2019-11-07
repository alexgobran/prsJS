
var xusers = [
    {
        "id": 1,
        "username": "adm",
        "password": "adm",
        "firstname": "Normal",
        "lastname": "Admin",
        "phone": "513-555-1212",
        "email": "help@admin.com",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 2,
        "username": "user",
        "password": "user",
        "firstname": "Normal",
        "lastname": "User",
        "phone": "",
        "email": "",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 3,
        "username": "sa",
        "password": "sa",
        "firstname": "System",
        "lastname": "Admin",
        "phone": "",
        "email": "",
        "isReviewer": true,
        "isAdmin": true
    }
]




function refresh(users) {
    var tbodyCtrl = document.getElementById("tbody");
    //  will make tbody tag empty
    tbodyCtrl.innerHTML = "";
    for (var user of users) {
        // if (!user.isAdmin) {
        //     continue;
        // }
        var tr = "<tr>";
        tr += `<td>${user.id}</td>`
        tr += `<td>${user.username}</td>`
        // tr += `<td>${user.password}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
        tr += "</tr>";

        tbodyCtrl.innerHTML += tr;
    }


   
}
const getUsers = () => {
    Userlist()
    

    };



