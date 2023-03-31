import { z } from 'zod';
import { ExamSheetCreateWithoutUserInputObjectSchema } from './ExamSheetCreateWithoutUserInput.schema';
import { ExamSheetUncheckedCreateWithoutUserInputObjectSchema } from './ExamSheetUncheckedCreateWithoutUserInput.schema';
import { ExamSheetCreateOrConnectWithoutUserInputObjectSchema } from './ExamSheetCreateOrConnectWithoutUserInput.schema';
import { ExamSheetCreateManyUserInputEnvelopeObjectSchema } from './ExamSheetCreateManyUserInputEnvelope.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetCreateWithoutUserInputObjectSchema),
          z.lazy(() => ExamSheetCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ExamSheetUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ExamSheetUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ExamSheetCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ExamSheetCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
