import { z } from 'zod';
import { ExamSectionUpdateManyMutationInputObjectSchema } from './objects/ExamSectionUpdateManyMutationInput.schema';
import { ExamSectionWhereInputObjectSchema } from './objects/ExamSectionWhereInput.schema';

export const ExamSectionUpdateManySchema = z.object({
  data: ExamSectionUpdateManyMutationInputObjectSchema,
  where: ExamSectionWhereInputObjectSchema.optional(),
});
