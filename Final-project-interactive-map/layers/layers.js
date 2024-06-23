var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Bear_1 = new ol.format.GeoJSON();
var features_Bear_1 = format_Bear_1.readFeatures(json_Bear_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bear_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bear_1.addFeatures(features_Bear_1);
var lyr_Bear_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bear_1, 
                style: style_Bear_1,
                popuplayertitle: "Bear",
                interactive: true,
                title: '<img src="styles/legend/Bear_1.png" /> Bear'
            });
var format_Wolverine_2 = new ol.format.GeoJSON();
var features_Wolverine_2 = format_Wolverine_2.readFeatures(json_Wolverine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wolverine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wolverine_2.addFeatures(features_Wolverine_2);
var lyr_Wolverine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wolverine_2, 
                style: style_Wolverine_2,
                popuplayertitle: "Wolverine",
                interactive: true,
                title: '<img src="styles/legend/Wolverine_2.png" /> Wolverine'
            });
var format_Lynx_3 = new ol.format.GeoJSON();
var features_Lynx_3 = format_Lynx_3.readFeatures(json_Lynx_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lynx_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lynx_3.addFeatures(features_Lynx_3);
var lyr_Lynx_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lynx_3, 
                style: style_Lynx_3,
                popuplayertitle: "Lynx",
                interactive: false,
                title: '<img src="styles/legend/Lynx_3.png" /> Lynx'
            });
var format_Wolf_4 = new ol.format.GeoJSON();
var features_Wolf_4 = format_Wolf_4.readFeatures(json_Wolf_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wolf_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wolf_4.addFeatures(features_Wolf_4);
var lyr_Wolf_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wolf_4, 
                style: style_Wolf_4,
                popuplayertitle: "Wolf",
                interactive: true,
                title: '<img src="styles/legend/Wolf_4.png" /> Wolf'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Bear_1.setVisible(true);lyr_Wolverine_2.setVisible(true);lyr_Lynx_3.setVisible(true);lyr_Wolf_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Bear_1,lyr_Wolverine_2,lyr_Lynx_3,lyr_Wolf_4];
lyr_Bear_1.set('fieldAliases', {'fid': 'fid', 'record_quality': 'record_quality', 'collection_quality': 'collection_quality', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'document_id': 'document_id', 'team': 'team', });
lyr_Wolverine_2.set('fieldAliases', {'fid': 'fid', 'record_quality': 'record_quality', 'collection_quality': 'collection_quality', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'document_id': 'document_id', 'team': 'team', 'date': 'date', });
lyr_Lynx_3.set('fieldAliases', {'fid': 'fid', 'record_quality': 'record_quality', 'collection_quality': 'collection_quality', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'document_id': 'document_id', 'team': 'team', 'year': 'year', 'date': 'date', });
lyr_Wolf_4.set('fieldAliases', {'fid': 'fid', 'record_quality': 'record_quality', 'collection_quality': 'collection_quality', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'document_id': 'document_id', 'team': 'team', });
lyr_Bear_1.set('fieldImages', {'fid': 'TextEdit', 'record_quality': 'TextEdit', 'collection_quality': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'document_id': 'TextEdit', 'team': 'TextEdit', });
lyr_Wolverine_2.set('fieldImages', {'fid': '', 'record_quality': '', 'collection_quality': '', 'taxonomic_order': '', 'formatted_taxon_name': '', 'abundance_verbatim': '', 'formatted_date_time': '', 'country': '', 'bio_province_interpreted': '', 'locality': '', 'collection_name': '', 'document_id': '', 'team': '', 'date': '', });
lyr_Lynx_3.set('fieldImages', {'fid': '', 'record_quality': '', 'collection_quality': '', 'taxonomic_order': '', 'formatted_taxon_name': '', 'abundance_verbatim': '', 'formatted_date_time': '', 'country': '', 'bio_province_interpreted': '', 'locality': '', 'collection_name': '', 'document_id': '', 'team': '', 'year': '', 'date': '', });
lyr_Wolf_4.set('fieldImages', {'fid': 'TextEdit', 'record_quality': 'TextEdit', 'collection_quality': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'document_id': 'TextEdit', 'team': 'TextEdit', });
lyr_Bear_1.set('fieldLabels', {'fid': 'no label', 'record_quality': 'no label', 'collection_quality': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'document_id': 'no label', 'team': 'no label', });
lyr_Wolverine_2.set('fieldLabels', {'fid': 'no label', 'record_quality': 'no label', 'collection_quality': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'document_id': 'no label', 'team': 'no label', 'date': 'no label', });
lyr_Lynx_3.set('fieldLabels', {'fid': 'no label', 'record_quality': 'no label', 'collection_quality': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'document_id': 'no label', 'team': 'no label', 'year': 'no label', 'date': 'no label', });
lyr_Wolf_4.set('fieldLabels', {'fid': 'no label', 'record_quality': 'no label', 'collection_quality': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'document_id': 'no label', 'team': 'no label', });
lyr_Wolf_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});