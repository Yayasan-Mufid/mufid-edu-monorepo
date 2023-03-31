import { z } from 'zod';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUpdateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpsertWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => StudyGroupScheduleUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupScheduleUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
