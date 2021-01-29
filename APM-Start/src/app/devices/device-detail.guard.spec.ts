import { TestBed } from '@angular/core/testing';

import { DeviceDetailGuard } from './device-detail.guard';

describe('DeviceDetailGuard', () => {
  let guard: DeviceDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeviceDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
