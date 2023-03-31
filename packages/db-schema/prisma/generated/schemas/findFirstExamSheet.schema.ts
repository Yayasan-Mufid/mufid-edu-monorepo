import { z } from 'zod';
import { ExamSheetSelectObjectSchema } from './objects/ExamSheetSelect.schema';
import { ExamSheetIncludeObjectSchema } from './objects/ExamSheetInclude.schema';
import { ExamSheetOrderByWithRelationInputObjectSchema } from './objects/ExamSheetOrderByWithRelationInput.schema';
import { ExamSheetWhereInputObjectSchema } from './objects/ExamSheetWhereInput.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './objects/ExamSheetWhereUniqueInput.schema';
import { ExamSheetScalarFieldEnumSchema } from './enums/ExamSheetScalarFieldEnum.schema';

export const ExamSheetFindFirstSchema = z.object({
  select: ExamSheetSelectObjectSchema.optional(),
  include: ExamSheetIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSheetOrderByWithRelationInputObjectSchema,
      ExamSheetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSheetWhereInputObjectSchema.optional(),
  cursor: ExamSheetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExamSheetScalarFieldEnumSchema).optional(),
});
