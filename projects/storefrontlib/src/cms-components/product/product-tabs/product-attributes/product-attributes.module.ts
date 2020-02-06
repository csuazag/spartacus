import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../../selector/selector.module';
import { ProductAttributesComponent } from './product-attributes.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductSpecsTabComponent: {
          component: ProductAttributesComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [ProductAttributesComponent],
  entryComponents: [ProductAttributesComponent],
  exports: [ProductAttributesComponent],
})
export class ProductAttributesModule {}
