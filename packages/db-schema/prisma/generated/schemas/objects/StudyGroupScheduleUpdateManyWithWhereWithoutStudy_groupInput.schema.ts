import { z } from 'zod';
import { StudyGroupScheduleScalarWhereInputObjectSchema } from './StudyGroupScheduleScalarWhereInput.schema';
import { StudyGroupScheduleUpdateManyMutationInputObjectSchema } from './StudyGroupScheduleUpdateManyMutationInput.schema';
import { StudyGroupScheduleUncheckedUpdateManyWithoutScheduleInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateManyWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpdateManyWithWhereWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupScheduleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateManyWithoutScheduleInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupScheduleUpdateManyWithWhereWithoutStudy_groupInputObjectSchema =
  Schema;
