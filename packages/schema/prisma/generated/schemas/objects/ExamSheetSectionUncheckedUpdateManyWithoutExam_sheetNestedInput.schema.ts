import { z } from 'zod';
import { ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateWithoutExam_sheetInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutExam_sheetInput.schema';
import { ExamSheetSectionCreateOrConnectWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateOrConnectWithoutExam_sheetInput.schema';
import { ExamSheetSectionUpsertWithWhereUniqueWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUpsertWithWhereUniqueWithoutExam_sheetInput.schema';
import { ExamSheetSectionCreateManyExam_sheetInputEnvelopeObjectSchema } from './ExamSheetSectionCreateManyExam_sheetInputEnvelope.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithWhereUniqueWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUpdateWithWhereUniqueWithoutExam_sheetInput.schema';
import { ExamSheetSectionUpdateManyWithWhereWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUpdateManyWithWhereWithoutExam_sheetInput.schema';
import { ExamSheetSectionScalarWhereInputObjectSchema } from './ExamSheetSectionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedUpdateManyWithoutExam_sheetNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionCreateOrConnectWithoutExam_sheetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionCreateOrConnectWithoutExam_sheetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionUpsertWithWhereUniqueWithoutExam_sheetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUpsertWithWhereUniqueWithoutExam_sheetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ExamSheetSectionCreateManyExam_sheetInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionUpdateWithWhereUniqueWithoutExam_sheetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUpdateWithWhereUniqueWithoutExam_sheetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionUpdateManyWithWhereWithoutExam_sheetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUpdateManyWithWhereWithoutExam_sheetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema),
          z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetSectionUncheckedUpdateManyWithoutExam_sheetNestedInputObjectSchema =
  Schema;
