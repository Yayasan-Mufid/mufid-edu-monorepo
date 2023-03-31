import { z } from 'zod';
import { StudyGroupScheduleSelectObjectSchema } from './objects/StudyGroupScheduleSelect.schema';
import { StudyGroupScheduleIncludeObjectSchema } from './objects/StudyGroupScheduleInclude.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './objects/StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleCreateInputObjectSchema } from './objects/StudyGroupScheduleCreateInput.schema';
import { StudyGroupScheduleUncheckedCreateInputObjectSchema } from './objects/StudyGroupScheduleUncheckedCreateInput.schema';
import { StudyGroupScheduleUpdateInputObjectSchema } from './objects/StudyGroupScheduleUpdateInput.schema';
import { StudyGroupScheduleUncheckedUpdateInputObjectSchema } from './objects/StudyGroupScheduleUncheckedUpdateInput.schema';

export const StudyGroupScheduleUpsertSchema = z.object({
  select: StudyGroupScheduleSelectObjectSchema.optional(),
  include: StudyGroupScheduleIncludeObjectSchema.optional(),
  where: StudyGroupScheduleWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupScheduleCreateInputObjectSchema,
    StudyGroupScheduleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupScheduleUpdateInputObjectSchema,
    StudyGroupScheduleUncheckedUpdateInputObjectSchema,
  ]),
});
