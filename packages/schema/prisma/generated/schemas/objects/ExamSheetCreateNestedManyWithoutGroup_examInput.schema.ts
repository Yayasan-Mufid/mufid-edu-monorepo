import { z } from 'zod';
import { ExamSheetCreateWithoutGroup_examInputObjectSchema } from './ExamSheetCreateWithoutGroup_examInput.schema';
import { ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGroup_examInput.schema';
import { ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema } from './ExamSheetCreateOrConnectWithoutGroup_examInput.schema';
import { ExamSheetCreateManyGroup_examInputEnvelopeObjectSchema } from './ExamSheetCreateManyGroup_examInputEnvelope.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateNestedManyWithoutGroup_examInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetCreateWithoutGroup_examInputObjectSchema),
          z
            .lazy(() => ExamSheetCreateWithoutGroup_examInputObjectSchema)
            .array(),
          z.lazy(
            () => ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetUncheckedCreateWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetCreateOrConnectWithoutGroup_examInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetCreateManyGroup_examInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetCreateNestedManyWithoutGroup_examInputObjectSchema =
  Schema;
