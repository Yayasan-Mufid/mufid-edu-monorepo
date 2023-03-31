import { z } from 'zod';
import { ExamSheetItemCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutQuestionInput.schema';
import { ExamSheetItemCreateOrConnectWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateOrConnectWithoutQuestionInput.schema';
import { ExamSheetItemUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './ExamSheetItemUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { ExamSheetItemCreateManyQuestionInputEnvelopeObjectSchema } from './ExamSheetItemCreateManyQuestionInputEnvelope.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './ExamSheetItemUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { ExamSheetItemUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './ExamSheetItemUpdateManyWithWhereWithoutQuestionInput.schema';
import { ExamSheetItemScalarWhereInputObjectSchema } from './ExamSheetItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUncheckedUpdateManyWithoutQuestionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetItemCreateManyQuestionInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpdateManyWithWhereWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExamSheetItemScalarWhereInputObjectSchema),
          z.lazy(() => ExamSheetItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetItemUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
