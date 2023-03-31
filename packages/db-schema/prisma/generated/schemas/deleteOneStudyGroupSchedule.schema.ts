import { z } from 'zod';
import { StudyGroupScheduleSelectObjectSchema } from './objects/StudyGroupScheduleSelect.schema';
import { StudyGroupScheduleIncludeObjectSchema } from './objects/StudyGroupScheduleInclude.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './objects/StudyGroupScheduleWhereUniqueInput.schema';

export const StudyGroupScheduleDeleteOneSchema = z.object({
  select: StudyGroupScheduleSelectObjectSchema.optional(),
  include: StudyGroupScheduleIncludeObjectSchema.optional(),
  where: StudyGroupScheduleWhereUniqueInputObjectSchema,
});
