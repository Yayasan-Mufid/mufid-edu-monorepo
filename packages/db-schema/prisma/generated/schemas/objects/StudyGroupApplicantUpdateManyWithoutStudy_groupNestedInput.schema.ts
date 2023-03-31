import { z } from 'zod';
import { StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUpsertWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupApplicantCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupApplicantCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUpdateWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUpdateManyWithWhereWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUpdateManyWithWhereWithoutStudy_groupInput.schema';
import { StudyGroupApplicantScalarWhereInputObjectSchema } from './StudyGroupApplicantScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUpdateManyWithoutStudy_groupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupApplicantCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupApplicantScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupApplicantScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupApplicantUpdateManyWithoutStudy_groupNestedInputObjectSchema =
  Schema;
