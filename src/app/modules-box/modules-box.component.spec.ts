import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesBoxComponent } from     './modules-box.component ; 




describe('ShowModulesBypriorityComponent', () => {
  let component: ModulesBoxComponent;
  let fixture: ComponentFixture<ModulesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
