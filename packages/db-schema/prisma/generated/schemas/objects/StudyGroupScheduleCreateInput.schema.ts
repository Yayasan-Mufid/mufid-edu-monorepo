import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutScheduleInputObjectSchema } from './StudyGroupCreateNestedOneWithoutScheduleInput.schema';
import { ModuleItemCreateNestedOneWithoutScheduleInputObjectSchema } from './ModuleItemCreateNestedOneWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutScheduleInputObjectSchema,
    ),
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutScheduleInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupScheduleCreateInputObjectSchema = Schema;
