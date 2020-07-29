import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadcrumbMeta } from '../../cms/model/page.model';
import { ContentPageMetaResolver } from '../../cms/page/content-page-meta.resolver';
import { PageBreadcrumbResolver } from '../../cms/page/page.resolvers';

/**
 * Resolves the page data for Organization Pages.
 *
 * Breadcrumbs are built in this implementation only.
 *
 * @property {string} ORGANIZATION_ROOT_PATH the default root path for organization pages.
 * @property {string} ORGANIZATION_TRANSLATION_KEY the default i18n key for the organization breadcrumb label.
 */
@Injectable({
  providedIn: 'root',
})
export class OrganizationPageMetaResolver extends ContentPageMetaResolver
  implements PageBreadcrumbResolver {
  pageTemplate = 'CompanyPageTemplate';
  protected ORGANIZATION_ROOT_PATH = 'organization';
  protected ORGANIZATION_TRANSLATION_KEY = 'organization.breadcrumb';

  /**
   * @override
   * @returns {Observable<BreadcrumbMeta[]>} containing the localized label as well as the link for both home and organization breadcrumbs
   */
  resolveBreadcrumbs(): Observable<BreadcrumbMeta[]> {
    return combineLatest([
      super.resolveBreadcrumbs(),
      this.translation.translate(this.ORGANIZATION_TRANSLATION_KEY),
    ]).pipe(
      map(([breadcrumb, organizationLabel]: [BreadcrumbMeta[], string]) =>
        breadcrumb.concat([
          {
            label: organizationLabel,
            link: `/${this.ORGANIZATION_ROOT_PATH}`,
          },
        ])
      )
    );
  }
}