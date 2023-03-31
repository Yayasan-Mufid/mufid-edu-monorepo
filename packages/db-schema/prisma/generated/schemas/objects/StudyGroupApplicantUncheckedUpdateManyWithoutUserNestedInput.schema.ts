import { z } from 'zod';
import { StudyGroupApplicantCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutUserInput.schema';
import { StudyGroupApplicantCreateOrConnectWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateOrConnectWithoutUserInput.schema';
import { StudyGroupApplicantUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StudyGroupApplicantUpsertWithWhereUniqueWithoutUserInput.schema';
import { StudyGroupApplicantCreateManyUserInputEnvelopeObjectSchema } from './StudyGroupApplicantCreateManyUserInputEnvelope.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StudyGroupApplicantUpdateWithWhereUniqueWithoutUserInput.schema';
import { StudyGroupApplicantUpdateManyWithWhereWithoutUserInputObjectSchema } from './StudyGroupApplicantUpdateManyWithWhereWithoutUserInput.schema';
import { StudyGroupApplicantScalarWhereInputObjectSchema } from './StudyGroupApplicantScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupApplicantCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => StudyGroupApplicantCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupApplicantCreateManyUserInputEnvelopeObjectSchema)
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
              StudyGroupApplicantUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupApplicantUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupApplicantUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const StudyGroupApplicantUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
