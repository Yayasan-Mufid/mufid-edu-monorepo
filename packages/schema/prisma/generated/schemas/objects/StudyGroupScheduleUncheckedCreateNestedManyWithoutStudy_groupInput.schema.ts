import { z } from 'zod';
import { StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupScheduleCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupScheduleCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedCreateNestedManyWithoutStudy_groupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupScheduleCreateManyStudy_groupInputEnvelopeObjectSchema,
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

export const StudyGroupScheduleUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema =
  Schema;
