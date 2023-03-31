import { z } from 'zod';
import { ExamSheetSectionWhereInputObjectSchema } from './objects/ExamSheetSectionWhereInput.schema';

export const ExamSheetSectionDeleteManySchema = z.object({
  where: ExamSheetSectionWhereInputObjectSchema.optional(),
});
