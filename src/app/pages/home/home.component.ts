import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from '../../components/table/table.component';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule, TableComponent, BaseChartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales' }],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

// Pie Chart Configuration

public pieChartData: ChartConfiguration<'pie'>['data'] = {
  labels: ['Mobiles', 'Fashion', 'Electronics'],
  datasets: [
    {
      data: [300, 500, 100],
    }
  ]
};

public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
  responsive: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
};

}
