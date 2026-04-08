const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**

    // TODO
    const input1 = document.getElementById("name").value;
    const input2 = document.getElementById("age").value;
    let params = new URLSearchParams({ name: input1, age: input2 });
    const response = await fetch(`https://echo.zuplo.io/api?${params.toString()}`);
    const data = await response.json();
    let text = JSON.stringify(data, null, 2);
    output.textContent = text;

});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    // TODO
    const input1 = document.getElementById("name").value;
    const input2 = document.getElementById("age").value;
    let response = await fetch("https://echo.zuplo.io/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: input1, age: input2 })
    });
    let data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);

});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    // TODO
    const input1 = document.getElementById("name").value;
    const input2 = document.getElementById("age").value;
    const formData = new URLSearchParams();
    formData.append("name", input1);
    formData.append("age", input2);
    const response = await fetch("https://echo.zuplo.io/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    });
    const data = await response.json();
    let text = JSON.stringify(data);
    output.textContent = text;
});
