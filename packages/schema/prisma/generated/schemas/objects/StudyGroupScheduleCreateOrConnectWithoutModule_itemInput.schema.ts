import { z } from 'zod';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleCreateOrConnectWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
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

export const StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema =
  Schema;
