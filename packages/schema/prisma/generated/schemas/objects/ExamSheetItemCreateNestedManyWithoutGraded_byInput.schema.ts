import { z } from 'zod';
import { ExamSheetItemCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateWithoutGraded_byInput.schema';
import { ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutGraded_byInput.schema';
import { ExamSheetItemCreateOrConnectWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateOrConnectWithoutGraded_byInput.schema';
import { ExamSheetItemCreateManyGraded_byInputEnvelopeObjectSchema } from './ExamSheetItemCreateManyGraded_byInputEnvelope.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateNestedManyWithoutGraded_byInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetItemCreateWithoutGraded_byInputObjectSchema),
          z
            .lazy(() => ExamSheetItemCreateWithoutGraded_byInputObjectSchema)
            .array(),
          z.lazy(
            () => ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExamSheetItemCreateOrConnectWithoutGraded_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemCreateOrConnectWithoutGraded_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetItemCreateManyGraded_byInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetItemCreateNestedManyWithoutGraded_byInputObjectSchema =
  Schema;
