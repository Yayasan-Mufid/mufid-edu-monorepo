import { z } from 'zod';
import { StudyGroupExamCreateWithoutExamInputObjectSchema } from './StudyGroupExamCreateWithoutExamInput.schema';
import { StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutExamInput.schema';
import { StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema } from './StudyGroupExamCreateOrConnectWithoutExamInput.schema';
import { StudyGroupExamCreateManyExamInputEnvelopeObjectSchema } from './StudyGroupExamCreateManyExamInputEnvelope.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateNestedManyWithoutExamInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupExamCreateWithoutExamInputObjectSchema),
          z
            .lazy(() => StudyGroupExamCreateWithoutExamInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupExamCreateManyExamInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema =
  Schema;
