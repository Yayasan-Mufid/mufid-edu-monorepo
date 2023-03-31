import { z } from 'zod';
import { StudyGroupApplicantCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutUserInput.schema';
import { StudyGroupApplicantCreateOrConnectWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateOrConnectWithoutUserInput.schema';
import { StudyGroupApplicantCreateManyUserInputEnvelopeObjectSchema } from './StudyGroupApplicantCreateManyUserInputEnvelope.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => StudyGroupApplicantCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupApplicantUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
