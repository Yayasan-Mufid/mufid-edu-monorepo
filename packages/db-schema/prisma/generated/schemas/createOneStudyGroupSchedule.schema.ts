import { z } from 'zod';
import { StudyGroupScheduleSelectObjectSchema } from './objects/StudyGroupScheduleSelect.schema';
import { StudyGroupScheduleIncludeObjectSchema } from './objects/StudyGroupScheduleInclude.schema';
import { StudyGroupScheduleCreateInputObjectSchema } from './objects/StudyGroupScheduleCreateInput.schema';
import { StudyGroupScheduleUncheckedCreateInputObjectSchema } from './objects/StudyGroupScheduleUncheckedCreateInput.schema';

export const StudyGroupScheduleCreateOneSchema = z.object({
  select: StudyGroupScheduleSelectObjectSchema.optional(),
  include: StudyGroupScheduleIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupScheduleCreateInputObjectSchema,
    StudyGroupScheduleUncheckedCreateInputObjectSchema,
  ]),
});
