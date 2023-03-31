import { z } from 'zod';
import { ExamSectionSelectObjectSchema } from './objects/ExamSectionSelect.schema';
import { ExamSectionIncludeObjectSchema } from './objects/ExamSectionInclude.schema';
import { ExamSectionOrderByWithRelationInputObjectSchema } from './objects/ExamSectionOrderByWithRelationInput.schema';
import { ExamSectionWhereInputObjectSchema } from './objects/ExamSectionWhereInput.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './objects/ExamSectionWhereUniqueInput.schema';
import { ExamSectionScalarFieldEnumSchema } from './enums/ExamSectionScalarFieldEnum.schema';

export const ExamSectionFindFirstSchema = z.object({
  select: ExamSectionSelectObjectSchema.optional(),
  include: ExamSectionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSectionOrderByWithRelationInputObjectSchema,
      ExamSectionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSectionWhereInputObjectSchema.optional(),
  cursor: ExamSectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExamSectionScalarFieldEnumSchema).optional(),
});
