import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'Number of rows to return',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //enableImplicitConversions: true
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'Number of records to skip',
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number) //enableImplicitConversions: true
  offset?: number;
}
