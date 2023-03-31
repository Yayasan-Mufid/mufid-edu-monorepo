import { z } from 'zod';
import { StudyGroupScheduleSelectObjectSchema } from './objects/StudyGroupScheduleSelect.schema';
import { StudyGroupScheduleIncludeObjectSchema } from './objects/StudyGroupScheduleInclude.schema';
import { StudyGroupScheduleOrderByWithRelationInputObjectSchema } from './objects/StudyGroupScheduleOrderByWithRelationInput.schema';
import { StudyGroupScheduleWhereInputObjectSchema } from './objects/StudyGroupScheduleWhereInput.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './objects/StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleScalarFieldEnumSchema } from './enums/StudyGroupScheduleScalarFieldEnum.schema';

export const StudyGroupScheduleFindManySchema = z.object({
  select: z.lazy(() => StudyGroupScheduleSelectObjectSchema.optional()),
  include: z.lazy(() => StudyGroupScheduleIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      StudyGroupScheduleOrderByWithRelationInputObjectSchema,
      StudyGroupScheduleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupScheduleWhereInputObjectSchema.optional(),
  cursor: StudyGroupScheduleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudyGroupScheduleScalarFieldEnumSchema).optional(),
});
