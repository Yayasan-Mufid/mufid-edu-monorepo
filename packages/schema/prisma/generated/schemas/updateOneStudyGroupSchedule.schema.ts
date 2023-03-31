import { z } from 'zod';
import { StudyGroupScheduleSelectObjectSchema } from './objects/StudyGroupScheduleSelect.schema';
import { StudyGroupScheduleIncludeObjectSchema } from './objects/StudyGroupScheduleInclude.schema';
import { StudyGroupScheduleUpdateInputObjectSchema } from './objects/StudyGroupScheduleUpdateInput.schema';
import { StudyGroupScheduleUncheckedUpdateInputObjectSchema } from './objects/StudyGroupScheduleUncheckedUpdateInput.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './objects/StudyGroupScheduleWhereUniqueInput.schema';

export const StudyGroupScheduleUpdateOneSchema = z.object({
  select: StudyGroupScheduleSelectObjectSchema.optional(),
  include: StudyGroupScheduleIncludeObjectSchema.optional(),
  data: z.union([
    StudyGroupScheduleUpdateInputObjectSchema,
    StudyGroupScheduleUncheckedUpdateInputObjectSchema,
  ]),
  where: StudyGroupScheduleWhereUniqueInputObjectSchema,
});
