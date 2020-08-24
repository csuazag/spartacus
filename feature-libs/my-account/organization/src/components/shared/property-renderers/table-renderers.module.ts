import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { AmountComponent } from './amount-value.component';
import { DateRangeComponent } from './date-range.component';
import { OrganizationLinkComponent } from './organization-link.component';
import { UnitComponent } from './unit-value.component';

@NgModule({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule],
  declarations: [
    OrganizationLinkComponent,
    AmountComponent,
    DateRangeComponent,
    UnitComponent,
  ],
})
export class OrganizationDataRenders {}
