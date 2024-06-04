var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sightingsinpostalcodeareas_1 = new ol.format.GeoJSON();
var features_Sightingsinpostalcodeareas_1 = format_Sightingsinpostalcodeareas_1.readFeatures(json_Sightingsinpostalcodeareas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sightingsinpostalcodeareas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sightingsinpostalcodeareas_1.addFeatures(features_Sightingsinpostalcodeareas_1);
var lyr_Sightingsinpostalcodeareas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sightingsinpostalcodeareas_1, 
                style: style_Sightingsinpostalcodeareas_1,
                popuplayertitle: "Sightings in postal code areas",
                interactive: true,
    title: 'Sightings in postal code areas<br />\
    <img src="styles/legend/Sightingsinpostalcodeareas_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Sightingsinpostalcodeareas_1_1.png" /> 20 - 79<br />\
    <img src="styles/legend/Sightingsinpostalcodeareas_1_2.png" /> 79 - 166<br />\
    <img src="styles/legend/Sightingsinpostalcodeareas_1_3.png" /> 166 - 298<br />\
    <img src="styles/legend/Sightingsinpostalcodeareas_1_4.png" /> 298 - 446<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Sightingsinpostalcodeareas_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sightingsinpostalcodeareas_1];
lyr_Sightingsinpostalcodeareas_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'posti_alue': 'Postal code area', 'vuosi': 'vuosi', 'nimi': 'Name', 'namn': 'namn', 'kunta': 'kunta', 'kuntanro': 'kuntanro', 'pinta_ala': 'pinta_ala', 'NUMPOINTS': 'Sightings', });
lyr_Sightingsinpostalcodeareas_1.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'posti_alue': 'TextEdit', 'vuosi': 'TextEdit', 'nimi': 'TextEdit', 'namn': 'TextEdit', 'kunta': 'TextEdit', 'kuntanro': 'TextEdit', 'pinta_ala': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Sightingsinpostalcodeareas_1.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'posti_alue': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'inline label - visible with data', 'namn': 'hidden field', 'kunta': 'hidden field', 'kuntanro': 'hidden field', 'pinta_ala': 'hidden field', 'NUMPOINTS': 'inline label - visible with data', });
lyr_Sightingsinpostalcodeareas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});