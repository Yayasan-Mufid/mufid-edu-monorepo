import { z } from 'zod';
import { ExamCreateManyInputObjectSchema } from './objects/ExamCreateManyInput.schema';

export const ExamCreateManySchema = z.object({
  data: z.union([
    ExamCreateManyInputObjectSchema,
    z.array(ExamCreateManyInputObjectSchema),
  ]),
});
