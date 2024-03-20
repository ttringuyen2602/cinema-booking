import { TestBed } from '@angular/core/testing';

import { ToggleAdminMenuService } from './toggle-admin-menu.service';

describe('ToggleAdminMenuService', () => {
  let service: ToggleAdminMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleAdminMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
