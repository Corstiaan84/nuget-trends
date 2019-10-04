import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { SearchTypeComponent } from './components/search-type/search-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPeriodComponent } from './components/search-period/search-period.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIndicatorInterceptor } from './components/loading-indicator/loading-indicator.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule],

  declarations: [
    SearchInputComponent,
    PackageListComponent,
    SearchTypeComponent,
    SearchPeriodComponent],

  exports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    SearchInputComponent,
    PackageListComponent,
    SearchTypeComponent,
    SearchPeriodComponent,
    LoadingIndicatorComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingIndicatorInterceptor,
      multi: true
    }
  ],
})
export class SharedModule {
}
