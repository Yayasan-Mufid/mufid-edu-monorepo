import { z } from 'zod';
import { StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateOrConnectWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateManyModule_itemInputEnvelopeObjectSchema } from './StudyGroupScheduleCreateManyModule_itemInputEnvelope.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedCreateNestedManyWithoutModule_itemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupScheduleCreateManyModule_itemInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupScheduleUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema =
  Schema;
