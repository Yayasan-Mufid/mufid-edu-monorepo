import { z } from 'zod';
import { StudyGroupExamCreateWithoutGroupInputObjectSchema } from './StudyGroupExamCreateWithoutGroupInput.schema';
import { StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutGroupInput.schema';
import { StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema } from './StudyGroupExamCreateOrConnectWithoutGroupInput.schema';
import { StudyGroupExamCreateManyGroupInputEnvelopeObjectSchema } from './StudyGroupExamCreateManyGroupInputEnvelope.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUncheckedCreateNestedManyWithoutGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupExamCreateWithoutGroupInputObjectSchema),
          z
            .lazy(() => StudyGroupExamCreateWithoutGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupExamCreateManyGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupExamUncheckedCreateNestedManyWithoutGroupInputObjectSchema =
  Schema;
