import { z } from 'zod';
import { ExamSectionWhereInputObjectSchema } from './objects/ExamSectionWhereInput.schema';

export const ExamSectionDeleteManySchema = z.object({
  where: ExamSectionWhereInputObjectSchema.optional(),
});
