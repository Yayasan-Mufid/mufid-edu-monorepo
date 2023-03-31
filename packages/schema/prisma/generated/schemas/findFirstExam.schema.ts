import { z } from 'zod';
import { ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamOrderByWithRelationInputObjectSchema } from './objects/ExamOrderByWithRelationInput.schema';
import { ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamScalarFieldEnumSchema } from './enums/ExamScalarFieldEnum.schema';

export const ExamFindFirstSchema = z.object({
  select: ExamSelectObjectSchema.optional(),
  include: ExamIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ExamOrderByWithRelationInputObjectSchema,
      ExamOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamWhereInputObjectSchema.optional(),
  cursor: ExamWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExamScalarFieldEnumSchema).optional(),
});
