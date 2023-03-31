import { z } from 'zod';
import { ExamSheetSectionSelectObjectSchema } from './objects/ExamSheetSectionSelect.schema';
import { ExamSheetSectionIncludeObjectSchema } from './objects/ExamSheetSectionInclude.schema';
import { ExamSheetSectionOrderByWithRelationInputObjectSchema } from './objects/ExamSheetSectionOrderByWithRelationInput.schema';
import { ExamSheetSectionWhereInputObjectSchema } from './objects/ExamSheetSectionWhereInput.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './objects/ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionScalarFieldEnumSchema } from './enums/ExamSheetSectionScalarFieldEnum.schema';

export const ExamSheetSectionFindManySchema = z.object({
  select: z.lazy(() => ExamSheetSectionSelectObjectSchema.optional()),
  include: z.lazy(() => ExamSheetSectionIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ExamSheetSectionOrderByWithRelationInputObjectSchema,
      ExamSheetSectionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSheetSectionWhereInputObjectSchema.optional(),
  cursor: ExamSheetSectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExamSheetSectionScalarFieldEnumSchema).optional(),
});
