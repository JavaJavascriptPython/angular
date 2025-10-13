import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TpsGraphComponent } from './tps/tps-graph/tps-graph.component';
import { TpsTableComponent } from './tps/tps-table/tps-table.component';
import { ServerResponseComponent } from './server-response/server-response.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tps/graph', component: TpsGraphComponent },
  { path: 'tps/table', component: TpsTableComponent },
  { path: 'server-response', component: ServerResponseComponent },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
