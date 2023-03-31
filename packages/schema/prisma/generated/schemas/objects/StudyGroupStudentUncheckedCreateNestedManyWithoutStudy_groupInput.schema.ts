import { z } from 'zod';
import { StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupStudentCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupStudentCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUncheckedCreateNestedManyWithoutStudy_groupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => StudyGroupStudentCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupStudentUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema =
  Schema;
