import { z } from 'zod';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateOrConnectWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
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

export const StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema =
  Schema;
