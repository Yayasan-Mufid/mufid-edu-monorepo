import { z } from 'zod';
import { ExamSheetItemSelectObjectSchema } from './objects/ExamSheetItemSelect.schema';
import { ExamSheetItemIncludeObjectSchema } from './objects/ExamSheetItemInclude.schema';
import { ExamSheetItemOrderByWithRelationInputObjectSchema } from './objects/ExamSheetItemOrderByWithRelationInput.schema';
import { ExamSheetItemWhereInputObjectSchema } from './objects/ExamSheetItemWhereInput.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './objects/ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemScalarFieldEnumSchema } from './enums/ExamSheetItemScalarFieldEnum.schema';

export const ExamSheetItemFindFirstSchema = z.object({
  select: ExamSheetItemSelectObjectSchema.optional(),
  include: ExamSheetItemIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSheetItemOrderByWithRelationInputObjectSchema,
      ExamSheetItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSheetItemWhereInputObjectSchema.optional(),
  cursor: ExamSheetItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExamSheetItemScalarFieldEnumSchema).optional(),
});
