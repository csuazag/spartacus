import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { PageComponentModule } from '../../../cms-structure/page/index';
import { SelectorModule } from '../../../selector/selector.module';
import { CarouselModule, MediaModule } from '../../../shared/components/index';
import { BannerCarouselComponent } from './banner-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        RotatingImagesComponent: {
          component: BannerCarouselComponent,
        },
      },
    } as CmsConfig),
    PageComponentModule,
    CarouselModule,
    MediaModule,
    SelectorModule,
  ],
  declarations: [BannerCarouselComponent],
  entryComponents: [BannerCarouselComponent],
  exports: [BannerCarouselComponent],
})
export class BannerCarouselModule {}

