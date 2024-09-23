// details.js

document.addEventListener('DOMContentLoaded', () => {
    // Mock plant data
    const plants = {
        0: {
            name: "Aloe Vera",
            scientificName: "Aloe barbadensis miller",
            description: "Known for its thick, fleshy leaves that contain a gel with hydrating and healing properties.",
            uses: "Moisturizes skin; soothes sunburn; promotes healing of cuts and wounds.",
            region: "Native to the Arabian Peninsula",
            type: "Succulent perennial",
            image: "../images/aloe vera.jpg",
            moreImages: "https://example.com/more-images/ginger",
            watchVideo: "https://example.com/videos/ginger",
            additionalInfo: "https://example.com/info/ginger"
        },
        1: {
            name: "Chamomile",
            scientificName: "Matricaria chamomilla",
            description: "Features small daisy-like flowers with soothing properties, often used in teas and topical treatments.",
            uses: "Calms irritated skin; reduces redness; provides anti-inflammatory effects.",
            region: "Native to Europe and Western Asia, now grown worldwide.",
            type: "Annual herb",
            image: "../images/chamomile.jpg",
            moreImages: "https://example.com/more-images/peppermint",
            watchVideo: "https://example.com/videos/peppermint",
            additionalInfo: "https://example.com/info/peppermint"
        },
        2: {
            name: "Tea Plant",
            scientificName: "Melaleuca alternifolia",
            description: "Produces essential oil with powerful antimicrobial properties, commonly used in acne treatments and skin care products.",
            uses: "Treats acne; has antibacterial and antifungal properties; reduces inflammation.",
            region: "TNative to Australia.",
            type: "Evergreen tree or shrub.",
            image: "../images/tea tree.jpg",
            moreImages: "https://example.com/more-images/ginger",
            watchVideo: "https://example.com/videos/ginger",
            additionalInfo: "https://example.com/info/ginger"
        },
        3: {
            name: "Lavender",
            scientificName: "Lavandula angustifolia",
            description: "Known for its fragrant purple flowers and essential oil, used in aromatherapy and skin care for its calming effects",
            uses: "Soothes skin irritation; has antibacterial and anti-inflammatory effects; promotes relaxation.",
            region: "Native to the Mediterranean region, now cultivated globally.",
            type: "Evergreen shrub",
            image: "../images/lavender.jpg",
            moreImages: "https://example.com/more-images/ginger",
            watchVideo: "https://example.com/videos/ginger",
            additionalInfo: "https://example.com/info/ginger"
        },
        4: {
            name: "Calendula",
            scientificName: "Calendula officinalis",
            description: "Features bright orange or yellow flowers with anti-inflammatory and healing properties, often used in creams and ointments.",
            uses: "Heals wounds; reduces inflammation; soothes skin irritations.",
            region: "Native to the Mediterranean region, now widely grown worldwide.",
            type: "Annual herb",
            image: "../images/calendula.jpg",
            moreImages: "https://example.com/more-images/ginger",
            watchVideo: "https://example.com/videos/ginger",
            additionalInfo: "https://example.com/info/ginger"
        },
        5: {
            name: "Witch Hazel",
            scientificName: "Hamamelis virginiana",
            description: " Known for its bark and twigs, which are distilled into an astringent extract used in various skin care products.",
            uses: "Astringent; reduces acne and blemishes; soothes irritated skin.",
            region: "Native to North America.",
            type: "Deciduous shrub.",
            image: "../images/witch hazel.jpg",
            moreImages: "https://example.com/more-images/ginger",
            watchVideo: "https://example.com/videos/ginger",
            additionalInfo: "https://example.com/info/ginger"
        },
        6: {
            name: "Rosehip",
            scientificName: "Rosa canina",
            description: " Produces small, red fruit (rosehips) that are rich in nutrients and used in oils and serums for skin rejuvenation.",
            uses: " Moisturizes and brightens skin; reduces signs of aging; rich in vitamin C and essential fatty acids.",
            region: "Native to Europe, North Africa, and western Asia.",
            type: "Deciduous shrub.",
            image: "../images/rosehip.jpg",
            moreImages: "https://example.com/more-images/ginger",
            watchVideo: "https://example.com/videos/ginger",
            additionalInfo: "https://example.com/info/ginger"
        }

        // Add more plants here
    };

    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('id');

    if (plants[plantId]) {
        const plant = plants[plantId];
        document.getElementById('plant-name').textContent = plant.name;
        document.getElementById('plant-scientific-name').textContent = `Scientific Name: ${plant.scientificName}`;
        document.getElementById('plant-description').textContent = `Description: ${plant.description}`;
        document.getElementById('plant-uses').textContent = `Uses: ${plant.uses}`;
        document.getElementById('plant-region').textContent = `Region: ${plant.region}`;
        document.getElementById('plant-type').textContent = `Type: ${plant.type}`;
        document.getElementById('plant-image').src = plant.image;
        
        // Set extra links
        document.getElementById('more-images').href = plant.moreImages;
        document.getElementById('watch-video').href = plant.watchVideo;
        document.getElementById('additional-info').href = plant.additionalInfo;
    } else {
        document.querySelector('.plant-detail-container').innerHTML = '<h2>Plant Not Found</h2>';
    }
});
