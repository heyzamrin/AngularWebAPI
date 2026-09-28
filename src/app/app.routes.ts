
import { Routes } from '@angular/router';
import { Insertdetails } from './insertdetails/insertdetails';
import { SelectAllDetails } from './select-all-details/select-all-details';
import { SelectDetails } from './select-details/select-details';

export const routes: Routes = [

{
    path: '',
    component: SelectAllDetails
},                 
  {
    path: 'ins',
    component: Insertdetails
  },
  {
    path: 'AllDetails',
    component: SelectAllDetails
  },
   {
    path: 'selectdetails/:id',
    component: SelectDetails
  }            
];





        
   









