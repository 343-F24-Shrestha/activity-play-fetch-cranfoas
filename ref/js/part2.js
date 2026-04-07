const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    let response = await fetch("https://reqres.in/api/users?page=1");
    let data = await response.json();
    for (let user of data.data) {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");

        div.className = "card";
        h2.textContent = user.first_name + " " + user.last_name;
        img.src = user.avatar;
        img.alt = "Profile pic";

        div.appendChild(h2);
        div.appendChild(img);
        userList.appendChild(div);
    }
});
