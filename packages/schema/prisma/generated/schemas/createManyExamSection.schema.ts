import { z } from 'zod';
import { ExamSectionCreateManyInputObjectSchema } from './objects/ExamSectionCreateManyInput.schema';

export const ExamSectionCreateManySchema = z.object({
  data: z.union([
    ExamSectionCreateManyInputObjectSchema,
    z.array(ExamSectionCreateManyInputObjectSchema),
  ]),
});
