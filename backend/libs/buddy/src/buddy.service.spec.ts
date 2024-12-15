import { Test, TestingModule } from '@nestjs/testing';
import { BuddyService } from './buddy.service';

describe('BuddyService', () => {
  let service: BuddyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuddyService],
    }).compile();

    service = module.get<BuddyService>(BuddyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
