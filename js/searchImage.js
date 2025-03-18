document.getElementById("identifyButton").addEventListener("click", async function() {
    let fileInput = document.getElementById('plantImage');
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select an image.");
        return;
    }

    let formData = new FormData();
    formData.append("images", file);

    try {
        // **Step 1: Send Image to Plant ID API**
        let plantResponse = await fetch("https://api.plant.id/v3/identification", {
            method: "POST",
            headers: {
                "Api-Key": "X6K7tGPpzrmfhmXXtzT5jAEQfDPPN4HUjKo19Vzs8oaWUFGG21" // Replace with your actual API key
            },
            body: formData
        });

        let plantData = await plantResponse.json();
        
        if (!plantData.result || !plantData.result.classification || !plantData.result.classification.suggestions[0]) {
            alert("Failed to identify the plant.");
            return;
        }

        let plantName = plantData.result.classification.suggestions[0].name; // Extract Plant Name
        document.getElementById("plantName").textContent = plantName;

        // **Step 2: Search Image on Pixabay API**
        fetchPixabayImage(plantName);

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to identify plant.");
    }
});

async function fetchPixabayImage(query) {
    try {
        let response = await fetch(`https://pixabay.com/api/?key=49412488-272474380016312727dd1b89a&q=${query}&image_type=photo`);
        let data = await response.json();

        if (data.hits.length > 0) {
            let imageUrl = data.hits[0].webformatURL;
            document.getElementById("imageResult").innerHTML = `
                <img src="${imageUrl}" alt="${query}" class="plant-image">
            `;
        } else {
            document.getElementById("imageResult").innerHTML = "<p>No image found.</p>";
        }
    } catch (error) {
        console.error("Error fetching Pixabay image:", error);
        document.getElementById("imageResult").innerHTML = "<p>Failed to load image.</p>";
    }
}
