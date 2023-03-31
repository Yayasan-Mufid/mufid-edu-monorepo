import { z } from 'zod';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleUpdateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUpdateWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedUpdateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUpdateWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => StudyGroupScheduleUpdateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupScheduleUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
