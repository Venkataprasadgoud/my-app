import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { MailsComponent } from './mails/mails.component';
import { StudentsComponent } from './students/students.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CartComponent } from './cart/cart.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { UserComponent } from './user/user.component';
import { CapitalDirective } from './capital.directive';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { OperationsComponent } from './operations/operations.component';
// import { RatingComponent } from './rating/rating.component';
import { AboutUsModule } from './about-us/about-us.module';
import { SiblingCommunicationComponent } from './sibling-communication/sibling-communication.component';
import { SiblingItamsComponent } from './sibling-itams/sibling-itams.component';
import { SiblingNavigationComponent } from './sibling-navigation/sibling-navigation.component';
import { SiblingCartComponent } from './sibling-cart/sibling-cart.component';
import { SiblingDiscountComponent } from './sibling-discount/sibling-discount.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WellcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,  
    BMIComponent,
    DirectivesComponent,
    PipesComponent,
    EmplayessComponent,
    EventRegistrationComponent,
    FlipkartComponent,
    EmployeesDataComponent,
    MailsComponent,
    VehiclesComponent,
    StudentsComponent,
    VehicleDetailsComponent,
    CartComponent,
    MyAppsComponent,
    CreateVehicleComponent,
    UserComponent,
    CapitalDirective,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    Calculator2Component,
    OperationsComponent,
    // RatingComponent,
    SiblingCommunicationComponent,
    SiblingItamsComponent,
    SiblingNavigationComponent,
    SiblingCartComponent,
    SiblingDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
