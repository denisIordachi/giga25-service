import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  UseGuards,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Field } from 'src/entities/field.entity';
import { UpdateFieldDto } from 'src/DTO/update-field.dto';
import { FieldsService } from './field.service';

@UseGuards(JwtAuthGuard)
@Controller('fields')
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  @Get('business/:businessId')
  getByBusiness(
    @Param('businessId', ParseIntPipe) businessId: number,
  ): Promise<Field[]> {
    return this.fieldsService.findByBusinessId(businessId);
  }

  @Post(':businessId')
  async create(
    @Param('businessId') businessId: number,
    @Body() body: Partial<Field>,
  ) {
    return this.fieldsService.createField(businessId, body);
  }

  @Put(':fieldId')
  update(@Param('fieldId') fieldId: number, @Body() dto: UpdateFieldDto): Promise<Field> {
    return this.fieldsService.updateField(fieldId, dto);
  }

  @Delete(':fieldId')
  remove(@Param('fieldId') fieldId: number): Promise<{ deleted: boolean }> {
    return this.fieldsService.deleteField(fieldId);
  }
}
