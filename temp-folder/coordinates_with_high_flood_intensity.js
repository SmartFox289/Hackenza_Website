const dangerC = [[28.6966772,77.2106435],[28.6868536,77.1854889],[28.6871276,77.1837583],[28.6861878,77.1851386],[28.694574,77.18433],[28.6816971,77.1929412],[28.6820257,77.1924301],[28.6762168,77.1956052],[28.6802963,77.1970551],[28.6743501,77.2120049],[28.6836493,77.2015211],[28.6787272,77.2024418],[28.6742802,77.2122645],[28.6812383,77.2227538],[28.6870672,77.2059075],[28.6907039,77.185264],[28.6902958,77.1823402],[28.6911835,77.2136574],[28.6898905,77.2136668],[28.6866862,77.1892619],[28.6763316,77.2060128],[28.6746141,77.1986863],[28.6890992,77.1993937],[28.6934429,77.1949011],[28.6883803,77.2213772],[28.6926766,77.2058532],[28.6926088,77.2058184],[28.6904041,77.2001016],[28.6777012,77.1888591],[28.6893358,77.1835246]];
// Iterate over each coordinate in dangerC array
dangerC.forEach(coord => {
    // Create a red circle at each coordinate
    var circle = L.circle(coord, {
        color: 'red', // Set the color of the circle to red
        fillColor: 'red', // Set the fill color of the circle to red
        fillOpacity: 0.5, // Set the opacity of the fill color
        radius: 35 // Set the radius of the circle (adjust as needed)
    });

    // Bind a popup to the circle with the text "This is danger" on hover
    circle.on('mouseover', function(event) {
        this.bindPopup('Danger').openPopup();
    });

    // Close the popup when mouse moves out of the circle
    circle.on('mouseout', function(event) {
        this.closePopup();
    });

    // Add the circle to the map
    circle.addTo(map);
});
