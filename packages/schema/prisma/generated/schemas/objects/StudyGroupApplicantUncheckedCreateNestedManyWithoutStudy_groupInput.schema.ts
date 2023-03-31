import { z } from 'zod';
import { StudyGroupApplicantCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupApplicantCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupApplicantCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupApplicantCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './StudyGroupApplicantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantUncheckedCreateNestedManyWithoutStudy_groupInput> =
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
      createMany: z
        .lazy(
          () =>
            StudyGroupApplicantCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupApplicantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupApplicantUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema =
  Schema;
