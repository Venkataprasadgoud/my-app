import { Component, createComponent, Directive, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmplayessComponent } from './emplayess/emplayess.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmployeesDataComponent } from './employees-data/employees-data.component';
import { MailsComponent } from './mails/mails.component';
import { StudentsComponent } from './students/students.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CartComponent } from './cart/cart.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { UserComponent } from './user/user.component';
import { NotifyGuard } from './notify.guard';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { Calculator2Component } from './calculator2/calculator2.component';
// import { RatingComponent } from './rating/rating.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { SiblingCommunicationComponent } from './sibling-communication/sibling-communication.component';



const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],component:DashboardComponent, children:[
    {path:'wellcome', component:WellcomeComponent},
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'my-apps',component:MyAppsComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'emplayess',component:EmplayessComponent},
    {path:'Event-Registration', component:EventRegistrationComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'employees-data',component:EmployeesDataComponent},
    {path:'mails',component:MailsComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path:'students',component:StudentsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path: 'create-vehicle', component: CreateVehicleComponent},
    {path:'cart',component:CartComponent},
    {path:'user',canDeactivate:[NotifyGuard],component:UserComponent},
    {path:'create-company',component:CreateCompanyComponent},
    {path:'parent',component:ParentComponent},
    {path:'calculator2',component:Calculator2Component},
    {path:'sibling-communication',component:SiblingCommunicationComponent},
    

    // {path:'rating',component:RatingComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
