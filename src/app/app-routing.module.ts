import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { IntroComponent } from './components/intro/intro.component';
import { AuthGuard } from './modules/auth';

const routes: Routes = [
    //Site routes goes here
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: '', component: IntroComponent, pathMatch: 'full' },
            // Other, public routes
        ],
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    },
    // App routes goes here here
    {
        path: '',
        component: AppLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'profile',
                loadChildren: () =>
                    import('./modules/profile/profile.module').then(m => m.ProfileModule),
            },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
