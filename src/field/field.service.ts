import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Field } from 'src/entities/field.entity';
import { UpdateFieldDto } from 'src/DTO/update-field.dto';

@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Field)
    private readonly fieldRepo: Repository<Field>,
  ) {}

  async findByBusinessId(businessId: number): Promise<Field[]> {
    return this.fieldRepo.find({ where: { businessId } });
  }

  async createField(businessId: number, dto: Partial<Field>) {
    const field = this.fieldRepo.create({
      ...dto,
      businessId,
    });
    return this.fieldRepo.save(field);
  }

  async updateField(fieldId: number, dto: UpdateFieldDto): Promise<Field> {
    const field = await this.fieldRepo.findOneBy({ id: fieldId });

    if (!field) throw new NotFoundException('Field not found');

    Object.assign(field, dto);
		
    return this.fieldRepo.save(field);
  }

  async deleteField(fieldId: number): Promise<{ deleted: boolean }> {
    const result = await this.fieldRepo.delete({ id: fieldId });

    return { deleted: Number(result?.affected) > 0 };
  }
}
