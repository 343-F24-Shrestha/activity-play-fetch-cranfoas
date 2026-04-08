const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    // TODO
    const url = "https://randomuser.me/api/?results=20";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data.results;

        users.forEach(user => {
            const firstName = user.name.first;
            const lastName = user.name.last;
            const fullName = `${firstName} ${lastName}`;
            const profileImage = user.picture.thumbnail;

            const userDiv = document.createElement("div");
            userDiv.classList.add("card");

            const imgElement = document.createElement("img");
            imgElement.src = profileImage;
            imgElement.alt = fullName;

            const nameElement = document.createElement("p");
            nameElement.textContent = fullName;

            userDiv.appendChild(imgElement);
            userDiv.appendChild(nameElement);

            userList.appendChild(userDiv);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});
