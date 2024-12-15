import { Module } from '@nestjs/common';
import { BuddyService } from './buddy.service';

@Module({
  providers: [BuddyService],
  exports: [BuddyService],
})
export class BuddyModule {}
