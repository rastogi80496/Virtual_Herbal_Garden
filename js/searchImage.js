
document.getElementById("identifyButton").addEventListener("click", async function () {
    let fileInput = document.getElementById('plantImage');
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select an image.");
        return;
    }

    let formData = new FormData();
    formData.append("images", file);

    // Show Loader
    document.getElementById("loading").style.display = "block";

    try {
        let plantResponse = await fetch("https://api.plant.id/v3/identification", {
            method: "POST",
            headers: {
                "Api-Key": "X6K7tGPpzrmfhmXXtzT5jAEQfDPPN4HUjKo19Vzs8oaWUFGG21" // 🔹 Replace with your PlantID API key
            },
            body: formData
        });

        let plantData = await plantResponse.json();

        // Hide Loader
        document.getElementById("loading").style.display = "none";

        if (!plantData.result || !plantData.result.classification || !plantData.result.classification.suggestions[0]) {
            alert("Failed to identify the plant.");
            return;
        }

        let plantName = plantData.result.classification.suggestions[0].name;
        document.getElementById("plantName").textContent = plantName;

        // Show the details section
        document.getElementById("plantDetails").style.display = "block";

        // 🔹 Fetch additional plant details if available
        updatePlantDetail("plantFamily", "Family", plantData.result.classification.family);
        updatePlantDetail("plantGenus", "Genus", plantData.result.classification.genus);
        updatePlantDetail("plantSpecies", "Species", plantData.result.classification.species);
        updatePlantDetail("plantEdibility", "Edibility", plantData.result.details?.edible);
        updatePlantDetail("plantMedicinal", "Medicinal Uses", plantData.result.details?.medicinal);
        updateWikiLink("wikiLink", plantData.result.details?.url);

        // 🔹 Fetch image from Pixabay
        fetchPixabayImage(plantName);

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to identify plant.");
        document.getElementById("loading").style.display = "none";
    }
});

// Function to update plant details only if received
function updatePlantDetail(elementId, label, value) {
    let elementContainer = document.getElementById(elementId + "Container");
    let element = document.getElementById(elementId);

    if (value) {
        element.textContent = value;
        elementContainer.style.display = "block";
    } else {
        elementContainer.style.display = "none";
    }
}

// Function to update Wikipedia link
function updateWikiLink(elementId, url) {
    let elementContainer = document.getElementById(elementId + "Container");
    let element = document.getElementById(elementId);

    if (url) {
        element.href = url;
        element.textContent = "More Info";
        elementContainer.style.display = "block";
    } else {
        elementContainer.style.display = "none";
    }
}

// 🔹 Fetch Image from Pixabay
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

