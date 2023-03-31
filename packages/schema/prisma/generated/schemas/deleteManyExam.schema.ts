import { z } from 'zod';
import { ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';

export const ExamDeleteManySchema = z.object({
  where: ExamWhereInputObjectSchema.optional(),
});
