import { z } from 'zod';
import { ExamSheetItemCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateWithoutGraded_byInput.schema';
import { ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutGraded_byInput.schema';
import { ExamSheetItemCreateOrConnectWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateOrConnectWithoutGraded_byInput.schema';
import { ExamSheetItemUpsertWithWhereUniqueWithoutGraded_byInputObjectSchema } from './ExamSheetItemUpsertWithWhereUniqueWithoutGraded_byInput.schema';
import { ExamSheetItemCreateManyGraded_byInputEnvelopeObjectSchema } from './ExamSheetItemCreateManyGraded_byInputEnvelope.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithWhereUniqueWithoutGraded_byInputObjectSchema } from './ExamSheetItemUpdateWithWhereUniqueWithoutGraded_byInput.schema';
import { ExamSheetItemUpdateManyWithWhereWithoutGraded_byInputObjectSchema } from './ExamSheetItemUpdateManyWithWhereWithoutGraded_byInput.schema';
import { ExamSheetItemScalarWhereInputObjectSchema } from './ExamSheetItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUncheckedUpdateManyWithoutGraded_byNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpsertWithWhereUniqueWithoutGraded_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpsertWithWhereUniqueWithoutGraded_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetItemCreateManyGraded_byInputEnvelopeObjectSchema)
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
              ExamSheetItemUpdateWithWhereUniqueWithoutGraded_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpdateWithWhereUniqueWithoutGraded_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpdateManyWithWhereWithoutGraded_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpdateManyWithWhereWithoutGraded_byInputObjectSchema,
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

export const ExamSheetItemUncheckedUpdateManyWithoutGraded_byNestedInputObjectSchema =
  Schema;
