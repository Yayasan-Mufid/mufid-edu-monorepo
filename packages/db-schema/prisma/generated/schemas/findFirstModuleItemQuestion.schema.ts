import { z } from 'zod';
import { ModuleItemQuestionSelectObjectSchema } from './objects/ModuleItemQuestionSelect.schema';
import { ModuleItemQuestionIncludeObjectSchema } from './objects/ModuleItemQuestionInclude.schema';
import { ModuleItemQuestionOrderByWithRelationInputObjectSchema } from './objects/ModuleItemQuestionOrderByWithRelationInput.schema';
import { ModuleItemQuestionWhereInputObjectSchema } from './objects/ModuleItemQuestionWhereInput.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionScalarFieldEnumSchema } from './enums/ModuleItemQuestionScalarFieldEnum.schema';

export const ModuleItemQuestionFindFirstSchema = z.object({
  select: ModuleItemQuestionSelectObjectSchema.optional(),
  include: ModuleItemQuestionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemQuestionOrderByWithRelationInputObjectSchema,
      ModuleItemQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemQuestionWhereInputObjectSchema.optional(),
  cursor: ModuleItemQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleItemQuestionScalarFieldEnumSchema).optional(),
});
