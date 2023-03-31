import { z } from 'zod';
import { ModuleItemQuestionStatusSelectObjectSchema } from './objects/ModuleItemQuestionStatusSelect.schema';
import { ModuleItemQuestionStatusIncludeObjectSchema } from './objects/ModuleItemQuestionStatusInclude.schema';
import { ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema } from './objects/ModuleItemQuestionStatusOrderByWithRelationInput.schema';
import { ModuleItemQuestionStatusWhereInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereInput.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereUniqueInput.schema';
import { ModuleItemQuestionStatusScalarFieldEnumSchema } from './enums/ModuleItemQuestionStatusScalarFieldEnum.schema';

export const ModuleItemQuestionStatusFindFirstSchema = z.object({
  select: ModuleItemQuestionStatusSelectObjectSchema.optional(),
  include: ModuleItemQuestionStatusIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema,
      ModuleItemQuestionStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemQuestionStatusWhereInputObjectSchema.optional(),
  cursor: ModuleItemQuestionStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleItemQuestionStatusScalarFieldEnumSchema).optional(),
});
