const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.

    const response = await mockFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
    console.log("Meal DB response:", response);
    const data = await response.json();
    output1.textContent = JSON.stringify(data, null, 2);
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    // Make a request to your second API here. Put the response's data in output-2.
    // If your response has no body, put the status code in output-2.

    const response = await fetch("https://corsproxy.io/?" + encodeURIComponent("https://xkcd.com/303/info.0.json"));
    console.log(response);
    const data = await response.json();
    output2.textContent = JSON.stringify(data, null, 2);
});
