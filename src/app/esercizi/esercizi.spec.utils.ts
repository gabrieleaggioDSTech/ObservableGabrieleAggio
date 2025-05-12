import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

export function configureTestModule(component: any) {
  return TestBed.configureTestingModule({
    declarations: [component],
    imports: [
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
      })
    ]
  }).compileComponents();
}