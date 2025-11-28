import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootRestSecurity } from './spring-boot-rest-security';

describe('SpringBootRestSecurity', () => {
  let component: SpringBootRestSecurity;
  let fixture: ComponentFixture<SpringBootRestSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringBootRestSecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringBootRestSecurity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
