import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutScheduleInputObjectSchema } from './ModuleItemCreateNestedOneWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateWithoutStudy_groupInput> =
  z
    .object({
      module_item: z.lazy(
        () => ModuleItemCreateNestedOneWithoutScheduleInputObjectSchema,
      ),
    })
    .strict();

export const StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema =
  Schema;
