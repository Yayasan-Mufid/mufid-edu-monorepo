import { z } from 'zod';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUpdateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpdateWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => StudyGroupScheduleUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupScheduleUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
