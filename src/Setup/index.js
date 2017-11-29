import React from 'react';
import './styles.css';
import Locales from '../locales.json';
import 'ammap3/ammap/ammap.js';
import 'ammap3/ammap/themes/dark.js';
import 'ammap3/ammap/maps/js/worldHigh.js';
import MapConfig from './MapConfig.js'
const selected = new Array();
class Setup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
         selected: []
       }
this.selecte = this.selecte.bind(this)
this.disSelect = this.disSelect.bind(this)
  }
  doPrint(){
    window.print();
  }
  selecte(code){
    Locales.forEach(country => {
      if(country.code == code){
      this.state.selected.push(country);
      }
    })
    console.log(this.state);
    this.setState({ selected: this.state.selected })
    this.forceUpdate();
  }
  disSelect(code){
      let selected = this.state.selected;
    Locales.forEach(country => {
      if(country.code == code){
        let index = this.state.selected.indexOf(country)
        selected.splice(index, 1);
      }
    })
      this.setState({ selected: selected })
  }
 componentDidMount(){
this.setState({ selected: this.state.selected })
   const map = window.AmCharts.makeChart("map", MapConfig);
   map.addListener('clickMapObject', event => {
     map.selectedObject = map.dataProvider;
event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
      if(event.mapObject.showAsSelected){
        this.selecte(event.mapObject.id);
      }else{
        this.disSelect(event.mapObject.id);
      }
          console.log(this.state.selected);
      this.forceUpdate();
        map.returnInitialColor(event.mapObject);
  });
 }
  render(){

  return (
    <div className="wrapper">
    <span id="print" onClick={this.doPrint}>
    drucken
    </span>
    <div id="madeby">
      <h1>Länderliste</h1>
      <h2>von micorix</h2>
</div>
  <div id="map"></div>
  <div id="container">
  <table>
  <thead>
  <tr>
  <th>Flagge</th>
  <th>Land</th>
  <th>Adjektiv</th>
  <th>Einwohner (m)</th>
  <th>Einwohner (f)</th>
  </tr>
  </thead>
  <tbody>
  {

   this.state.selected.map((row, index) => {
     let flagUrl = "https://github.com/hjnilsson/country-flags/blob/master/png100px/"+row.code.toLowerCase()+".png?raw=true";
    return (
        <tr key={row.Code}>
            <td><img src={flagUrl}/></td>
            <td>{row.Land}</td>
            <td>{row.Adjektiv}</td>
            <td>{row.Einwohner[0]}</td>
            <td>{row.Einwohner[1]}</td>
        </tr>
    );
 })
}
  </tbody>
  </table>
  </div>

    </div>
  );
}
  }

export default Setup;
