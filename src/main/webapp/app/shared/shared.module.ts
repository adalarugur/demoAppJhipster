import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoAppJhipsterSharedLibsModule, DemoAppJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DemoAppJhipsterSharedLibsModule, DemoAppJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DemoAppJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoAppJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: DemoAppJhipsterSharedModule
    };
  }
}
