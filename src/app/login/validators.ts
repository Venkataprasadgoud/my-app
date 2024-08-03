 import { AbstractControl,ValidationErrors } from "@angular/forms";
 export function domainvalidator(control:AbstractControl):any{

   if(control.value?.includes('@capgemini.com')){
        return null;
    }

    else{
        return{'domainvalidator':'invalid daomain'}
    }
 }       