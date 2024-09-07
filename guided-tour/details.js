// details.js

document.addEventListener('DOMContentLoaded', () => {
    // Mock plant data
    const plants = {
        0: {
            name: "Ginger",
            scientificName: "Zingiber officinale",
            description: "Ginger is a flowering plant in the family Zingiberaceae, known for its rhizome, which is commonly used as a spice and medicine. The rhizome, or underground stem, is characterized by its knobby, beige exterior and aromatic, spicy interior.",
            uses: "Ginger is widely used to alleviate digestive discomforts such as nausea, bloating, and indigestion. It is often consumed as a tea, added to meals, or taken as a supplement. In Ayurveda, ginger is considered a potent digestive aid that stimulates appetite and relieves gastrointestinal distress.",
            region: "Southeast Asia, West Africa",
            type: "Root",
            image: "../images/ginger.jpg",
            moreImages: "https://www.istockphoto.com/photos/ginger",
            watchVideo: "https://youtu.be/OlLwgjL5h3k?si=3gskhRgJD-QjR3MR",
            additionalInfo: "https://example.com/info/ginger"
        },
        1: {
            name: "Cumin",
            scientificName: "Cuminum cyminum",
            description: "Cumin is a flowering plant in the Apiaceae family, known for its small, crescent-shaped seeds. These seeds are aromatic and have a warm, earthy flavor. Cumin is widely used in culinary and medicinal contexts across various cultures.",
            uses: "Cumin seeds are employed to improve digestion by enhancing the activity of digestive enzymes. They are particularly effective in alleviating symptoms of indigestion, gas, and bloating. Cumin can be used in cooking or taken as a tea or supplement to aid digestive health.",
            region: "Middle East and Mediterranean, Indian Subcontinent",
            type: "Seed",
            image: "../images/cumin.jpg",
            moreImages: "https://www.istockphoto.com/photos/ginger",
            watchVideo: "https://youtu.be/eVsMukecYqk?si=YztFJyDjhEfrHCeJ",
            additionalInfo: "https://example.com/info/peppermint"
        },
        2: {
            name: "Fennel",
            scientificName: "Foeniculum vulgare",
            description: "Fennel is a flowering plant in the Apiaceae family, recognized for its feathery leaves and aromatic seeds. The seeds have a sweet, slightly licorice-like flavor and are used both as a spice and a medicinal herb.",
            uses: "Fennel seeds are used to relieve digestive issues such as bloating, gas, and indigestion. They are often chewed directly or brewed into a tea to soothe the digestive tract and promote healthy digestion.",
            region: "Mediterranean Region,Indian Subcontinent",
            type: "Seed",
            image: "../images/fennel.jpg",
            moreImages: "https://www.istockphoto.com/photos/fennel",
            watchVideo: "https://youtu.be/WMWFckLd4JI?si=efkkUVb_fDT2vlJh",
            additionalInfo: "https://example.com/info/ginger"
        },
        3: {
            name: "Turmeric",
            scientificName: "Curcuma longa",
            description: "Turmeric is a rhizome in the Zingiberaceae family, known for its vibrant yellow color and earthy, slightly bitter flavor. The dried and powdered form of the rhizome is commonly used in cooking and traditional medicine.",
            uses: "Turmeric is utilized for its anti-inflammatory and digestive benefits. It helps in improving digestion, reducing symptoms of indigestion, and supporting liver function. Turmeric can be incorporated into meals, taken as a supplement, or used as a tea.",
            region: "India, Southeast Asia",
            type: "Root",
            image: "../images/turmeric.jpg",
            moreImages: "https://www.istockphoto.com/photos/turmeric",
            watchVideo: "https://youtu.be/RCB3RCEDC6Q?si=_BE-ftGbFJT4mWvw",
            additionalInfo: "https://example.com/info/ginger"
        },
        4: {
            name: "Triphala",
            scientificName: "Terminalia chebula, Terminalia bellirica, Emblica officinalis)",
            description: "Triphala is a traditional Ayurvedic formulation composed of three fruits: Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula). Each fruit has distinct properties that contribute to the overall benefits of Triphala.",
            uses: "Triphala is a well-regarded digestive tonic used to promote regular bowel movements, detoxify the body, and support overall digestive health. It helps in balancing the digestive system, reducing constipation, and enhancing nutrient absorption.",
            region: "India, Sri Lanka",
            type: "Herbal formulation (combination of fruits).",
            image: "../images/triphala.jpg",
            moreImages: "https://www.istockphoto.com/photos/triphala",
            watchVideo: "https://youtu.be/9rke10KnZPE?si=zCaQ0cO31luXbEfq",
            additionalInfo: "https://example.com/info/ginger"
        },
        5: {
            name: "Coriander",
            scientificName: "Coriandrum sativum",
            description: "Coriander, also known as cilantro in its leaf form, is a plant in the Apiaceae family. The seeds, used as a spice, are small, round, and light brown with a warm, slightly citrusy flavor.",
            uses: "Coriander seeds are used to aid digestion, reduce bloating, and alleviate indigestion. They can be consumed as a spice in cooking, brewed into a tea, or taken as a supplement to improve digestive health.",
            region: "Mediterranean Region,Indian Subcontinent",
            type: "Seed",
            image: "../images/coriander.jpg",
            moreImages: "https://www.istockphoto.com/photos/coriander",
            watchVideo: "https://youtu.be/wteD3Ll18KE?si=94cmaMrH2gi7zge_",
            additionalInfo: "https://example.com/info/ginger"
        },
        6: {
            name: "Cardamom",
            scientificName: "Elettaria cardamomum",
            description: "Cardamom is a spice derived from the seeds of several plants in the Zingiberaceae family. The plant produces small, green, aromatic pods that contain tiny, fragrant seeds. The pods are used in both culinary and medicinal applications.",
            uses: "Cardamom is commonly used to enhance digestion, relieve bloating, and reduce nausea. It is often added to teas, desserts, and savory dishes for its digestive benefits. Cardamom can also be taken in supplement form or used as a spice in cooking.",
            region: "India, Sri Lanka",
            type: "Seed (from pods)",
            image: "../images/cardamom.jpg",
            moreImages: "https://www.istockphoto.com/photos/cardamom",
            watchVideo: "https://youtu.be/wteD3Ll18KE?si=94cmaMrH2gi7zge_",
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
