import { z } from 'zod';
import { ExamUpdateManyMutationInputObjectSchema } from './objects/ExamUpdateManyMutationInput.schema';
import { ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';

export const ExamUpdateManySchema = z.object({
  data: ExamUpdateManyMutationInputObjectSchema,
  where: ExamWhereInputObjectSchema.optional(),
});
