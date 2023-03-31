import { z } from 'zod';
import { ExamSheetItemCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutQuestionInput.schema';
import { ExamSheetItemCreateOrConnectWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateOrConnectWithoutQuestionInput.schema';
import { ExamSheetItemCreateManyQuestionInputEnvelopeObjectSchema } from './ExamSheetItemCreateManyQuestionInputEnvelope.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUncheckedCreateNestedManyWithoutQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetItemCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => ExamSheetItemCreateWithoutQuestionInputObjectSchema)
            .array(),
          z.lazy(
            () => ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExamSheetItemCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetItemCreateManyQuestionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetItemUncheckedCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
