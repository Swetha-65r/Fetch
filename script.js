fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())   
    .then(data => {
        console.log(data); 
        let output = document.getElementById("output");
        data.forEach(user => {
            output.innerHTML += `
                <p><strong>Name:</strong> ${user.name} <br>
                <strong>Email:</strong> ${user.email} <br>
                <strong>City:</strong> ${user.address.city}</p>
                <hr>
            `;
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
