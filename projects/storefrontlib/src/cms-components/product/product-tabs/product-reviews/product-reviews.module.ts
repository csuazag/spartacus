import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../../selector/selector.module';
import { StarRatingModule } from '../../../../shared/index';
import { ProductReviewsComponent } from './product-reviews.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    I18nModule,
    StarRatingModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductReviewsTabComponent: {
          component: ProductReviewsComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [ProductReviewsComponent],
  entryComponents: [ProductReviewsComponent],
  exports: [ProductReviewsComponent],
})
export class ProductReviewsModule {}
