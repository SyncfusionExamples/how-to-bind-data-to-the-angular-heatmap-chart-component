import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeatMapModule, AdaptorService } from '@syncfusion/ej2-angular-heatmap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeatMapModule],
  providers: [AdaptorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public dataSourceSettings: Object = {
    adaptorType: 'Table',
    isJsonData: true,
    xDataMapping: 'Region'
  };
  public heatMapData : Object[] = [
    { 'Region': 'USA', '2000': 93, '2004': 101, '2008': 112, '2012': 103, '2016': 121 },
    { 'Region': 'Spain', '2000': 28, '2004': 30, '2008': 49, '2012': 65, '2016': 67 },
    { 'Region': 'China', '2000': 58, '2004': 63, '2008': 100, '2012': 91, '2016': 70 },
    { 'Region': 'Russia', '2000': 89, '2004': 90, '2008': 60, '2012': 69, '2016': 55 },
    { 'Region': 'Germany', '2000': 56, '2004': 49, '2008': 41, '2012': 44, '2016': 42 },
    { 'Region': 'Japan', '2000': 18, '2004': 37, '2008': 25, '2012': 38, '2016': 41 },
    { 'Region': 'France', '2000': 38, '2004': 33, '2008': 43, '2012': 35, '2016': 42 },
    { 'Region': 'Austria', '2000': 28, '2004': 30, '2008': 32, '2012': 30, '2016': 21 },
    { 'Region': 'Italy', '2000': 34, '2004': 32, '2008': 27, '2012': 28, '2016': 28 }
    ];
  public xAxis: Object = {
    labels: ['China', 'France', 'Spain', 'Germany', 'Italy', 'Japan', 'Austria', 'Russia', 'USA']
  };
  public yAxis: Object = {
    labels: ['2000', '2004', '2008', '2012', '2016']
  };
  title = 'myangularapp';
}
