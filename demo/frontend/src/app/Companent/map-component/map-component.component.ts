import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";



@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {


  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.map();
  }
  map() {


    let defaultMap = "usaAlbersLow";
    // calculate which map to be used
    let currentMap = "costaRicaLow";

    let title = "Costa Rica";


    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    chart.titles.create().text = title;


    // Set map definition

    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
    chart.geodataSource.events.on("parseended", function (ev) {
      let data = [];
      for (var i = 0; i < ev.target.data.features.length; i++) {
        data.push({
          id: ev.target.data.features[i].id,
          value: Math.round(Math.random() * 7)
        })
      }
      polygonSeries.data = data;
    })

    

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;




    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);


    chart.tooltip.label.interactionsEnabled = true;
    chart.tooltip.keepTargetHover = true;

    // ZOOM
    chart.zoomToRectangle(
      chart.north,
      chart.east,
      chart.south,
      chart.west,
      1,
      true
    );


    var home = chart.chartContainer.createChild(am4core.Button);
    home.label.text = "Home";
    home.align = "right";
    home.events.on("hit", function (ev) {
      chart.goHome();
    });

  };

}
/*

import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";



@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {


  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.map();
  }
  map() {


    let defaultMap = "usaAlbersLow";
 // calculate which map to be used
 let currentMap = "costaRicaLow";

 let title = "Costa Rica";


 // Create map instance
 let chart = am4core.create("chartdiv", am4maps.MapChart);

 chart.titles.create().text = title;

 // Set map definition
 chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
 chart.geodataSource.events.on("parseended", function(ev) {
   let data = [];
   for(var i = 0; i < ev.target.data.features.length; i++) {
     data.push({
       id: ev.target.data.features[i].id,
       value: Math.round( Math.random() * 10000 )
     })
   }
   polygonSeries.data = data;
 })

 // Set projection
 chart.projection = new am4maps.projections.Mercator();

 // Create map polygon series
 let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

 //Set min/max fill color for each area
 polygonSeries.heatRules.push({
   property: "fill",
   target: polygonSeries.mapPolygons.template,
   min: chart.colors.getIndex(1).brighten(1),
   max: chart.colors.getIndex(1).brighten(-0.3)
 });

 // Make map load polygon data (state shapes and names) from GeoJSON
 polygonSeries.useGeodata = true;

 // Set up heat legend
 let heatLegend = chart.createChild(am4maps.HeatLegend);
 heatLegend.series = polygonSeries;
 heatLegend.align = "right";
 heatLegend.width = am4core.percent(25);
 heatLegend.marginRight = am4core.percent(4);
 heatLegend.minValue = 0;
 heatLegend.maxValue = 40000000;
 heatLegend.valign = "bottom";

 // Set up custom heat map legend labels using axis ranges
 let minRange = heatLegend.valueAxis.axisRanges.create();
 minRange.value = heatLegend.minValue;
 minRange.label.text = "Little";
 let maxRange = heatLegend.valueAxis.axisRanges.create();
 maxRange.value = heatLegend.maxValue;
 maxRange.label.text = "A lot!";

 // Blank out internal heat legend value axis labels
 heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
   return "";
 });

 // Configure series tooltip
 let polygonTemplate = polygonSeries.mapPolygons.template;
 polygonTemplate.tooltipText = "{name}: {value}";
 polygonTemplate.nonScalingStroke = true;
 polygonTemplate.strokeWidth = 0.5;

 // Create hover state and set alternative fill color
 let hs = polygonTemplate.states.create("hover");
 hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);



  };

}

*/


/*

import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";



@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {


  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.map();
  }
  map() {


    let defaultMap = "usaAlbersLow";
 // calculate which map to be used
 let currentMap = "costaRicaLow";

 let title = "Costa Rica";


 // Create map instance
 let chart = am4core.create("chartdiv", am4maps.MapChart);

 chart.titles.create().text = title;

 // Set map definition
 chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
 chart.geodataSource.events.on("parseended", function(ev) {
   let data = [];
   for(var i = 0; i < ev.target.data.features.length; i++) {
     data.push({
       id: ev.target.data.features[i].id,
       value: Math.round( Math.random() * 10000 )
     })
   }
   polygonSeries.data = data;
 })

 // Set projection
 chart.projection = new am4maps.projections.Mercator();

 // Create map polygon series
 let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

 //Set min/max fill color for each area
 polygonSeries.heatRules.push({
   property: "fill",
   target: polygonSeries.mapPolygons.template,
   min: chart.colors.getIndex(1).brighten(1),
   max: chart.colors.getIndex(1).brighten(-0.3)
 });

 // Make map load polygon data (state shapes and names) from GeoJSON
 polygonSeries.useGeodata = true;

 // Set up heat legend
 let heatLegend = chart.createChild(am4maps.HeatLegend);
 heatLegend.series = polygonSeries;
 heatLegend.align = "right";
 heatLegend.width = am4core.percent(25);
 heatLegend.marginRight = am4core.percent(4);
 heatLegend.minValue = 0;
 heatLegend.maxValue = 40000000;
 heatLegend.valign = "bottom";

 // Set up custom heat map legend labels using axis ranges
 let minRange = heatLegend.valueAxis.axisRanges.create();
 minRange.value = heatLegend.minValue;
 minRange.label.text = "Little";
 let maxRange = heatLegend.valueAxis.axisRanges.create();
 maxRange.value = heatLegend.maxValue;
 maxRange.label.text = "A lot!";

 // Blank out internal heat legend value axis labels
 heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
   return "";
 });

 // Configure series tooltip
 let polygonTemplate = polygonSeries.mapPolygons.template;
 polygonTemplate.tooltipText = "{name}: {value}";
 polygonTemplate.nonScalingStroke = true;
 polygonTemplate.strokeWidth = 0.5;

 // Create hover state and set alternative fill color
 let hs = polygonTemplate.states.create("hover");
 hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);



  };

}

 */


/*

import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";



@Component({
 selector: 'app-map-component',
 templateUrl: './map-component.component.html',
 styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {


 constructor(private zone: NgZone) { }

 ngOnInit() {
   this.map();
 }
 map() {


   let defaultMap = "usaAlbersLow";
// calculate which map to be used
let currentMap = "costaRicaLow";

let title = "Costa Rica";


// Create map instance
let chart = am4core.create("chartdiv", am4maps.MapChart);

chart.titles.create().text = title;

// Set map definition

chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
chart.geodataSource.events.on("parseended", function(ev) {
  let data = [];
  for(var i = 0; i < ev.target.data.features.length; i++) {
    data.push({
      id: ev.target.data.features[i].id,
      value: Math.round( Math.random() * 7 )
    })
  }
  polygonSeries.data = data;
})

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Create map polygon series
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(1).brighten(1),
  max: chart.colors.getIndex(1).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;




// Configure series tooltip
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);



 };

}

*/


/*  


import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";



@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {


  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.map();
  }
  map() {


    let defaultMap = "usaAlbersLow";
    // calculate which map to be used
    let currentMap = "costaRicaLow";

    let title = "Costa Rica";


    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    chart.titles.create().text = title;


    // Set map definition

    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
    chart.geodataSource.events.on("parseended", function (ev) {
      let data = [];
      for (var i = 0; i < ev.target.data.features.length; i++) {
        data.push({
          id: ev.target.data.features[i].id,
          value: Math.round(Math.random() * 7)
        })
      }
      polygonSeries.data = data;
    })

    

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;




    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);


    chart.tooltip.label.interactionsEnabled = true;
    chart.tooltip.keepTargetHover = true;

    // ZOOM
    chart.zoomToRectangle(
      chart.north,
      chart.east,
      chart.south,
      chart.west,
      1,
      true
    );


    var home = chart.chartContainer.createChild(am4core.Button);
    home.label.text = "Home";
    home.align = "right";
    home.events.on("hit", function (ev) {
      chart.goHome();
    });

  };

}


*/