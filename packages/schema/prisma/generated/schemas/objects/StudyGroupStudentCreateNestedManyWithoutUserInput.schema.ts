import { z } from 'zod';
import { StudyGroupStudentCreateWithoutUserInputObjectSchema } from './StudyGroupStudentCreateWithoutUserInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutUserInput.schema';
import { StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema } from './StudyGroupStudentCreateOrConnectWithoutUserInput.schema';
import { StudyGroupStudentCreateManyUserInputEnvelopeObjectSchema } from './StudyGroupStudentCreateManyUserInputEnvelope.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupStudentCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => StudyGroupStudentCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupStudentCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupStudentCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
