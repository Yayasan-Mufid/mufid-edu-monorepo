import { z } from 'zod';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleUpdateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUpdateWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedUpdateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpsertWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => StudyGroupScheduleUpdateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupScheduleUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
