import { z } from 'zod';
import { QuestionChoiceSelectObjectSchema } from './objects/QuestionChoiceSelect.schema';
import { QuestionChoiceIncludeObjectSchema } from './objects/QuestionChoiceInclude.schema';
import { QuestionChoiceOrderByWithRelationInputObjectSchema } from './objects/QuestionChoiceOrderByWithRelationInput.schema';
import { QuestionChoiceWhereInputObjectSchema } from './objects/QuestionChoiceWhereInput.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './objects/QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceScalarFieldEnumSchema } from './enums/QuestionChoiceScalarFieldEnum.schema';

export const QuestionChoiceFindManySchema = z.object({
  select: z.lazy(() => QuestionChoiceSelectObjectSchema.optional()),
  include: z.lazy(() => QuestionChoiceIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      QuestionChoiceOrderByWithRelationInputObjectSchema,
      QuestionChoiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionChoiceWhereInputObjectSchema.optional(),
  cursor: QuestionChoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(QuestionChoiceScalarFieldEnumSchema).optional(),
});
