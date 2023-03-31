import { z } from 'zod';
import { ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateWithoutExam_sheetInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutExam_sheetInput.schema';
import { ExamSheetSectionCreateOrConnectWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateOrConnectWithoutExam_sheetInput.schema';
import { ExamSheetSectionCreateManyExam_sheetInputEnvelopeObjectSchema } from './ExamSheetSectionCreateManyExam_sheetInputEnvelope.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedCreateNestedManyWithoutExam_sheetInput> =
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
      createMany: z
        .lazy(
          () => ExamSheetSectionCreateManyExam_sheetInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetSectionUncheckedCreateNestedManyWithoutExam_sheetInputObjectSchema =
  Schema;
