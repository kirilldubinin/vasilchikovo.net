import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { StartComponent } from '../components/start/start.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { WareHouseComponent } from '../components/warehouse/warehouse.component';

export const AppRoutes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'warehouse', component: WareHouseComponent },
    { path: 'tasks', component: TasksComponent }
  ];
