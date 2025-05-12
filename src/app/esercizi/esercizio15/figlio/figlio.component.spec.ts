import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';

import { FiglioComponent15 } from './figlio.component';

describe('FiglioComponent', () => {
  let component: FiglioComponent15;
  let fixture: ComponentFixture<FiglioComponent15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiglioComponent15 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiglioComponent15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
