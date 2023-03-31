import { z } from 'zod';
import { ExamSheetSectionUpdateManyMutationInputObjectSchema } from './objects/ExamSheetSectionUpdateManyMutationInput.schema';
import { ExamSheetSectionWhereInputObjectSchema } from './objects/ExamSheetSectionWhereInput.schema';

export const ExamSheetSectionUpdateManySchema = z.object({
  data: ExamSheetSectionUpdateManyMutationInputObjectSchema,
  where: ExamSheetSectionWhereInputObjectSchema.optional(),
});
