import { z } from 'zod';
import { ExamSheetSectionCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionCreateWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutSectionInput.schema';
import { ExamSheetSectionCreateOrConnectWithoutSectionInputObjectSchema } from './ExamSheetSectionCreateOrConnectWithoutSectionInput.schema';
import { ExamSheetSectionUpsertWithWhereUniqueWithoutSectionInputObjectSchema } from './ExamSheetSectionUpsertWithWhereUniqueWithoutSectionInput.schema';
import { ExamSheetSectionCreateManySectionInputEnvelopeObjectSchema } from './ExamSheetSectionCreateManySectionInputEnvelope.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithWhereUniqueWithoutSectionInputObjectSchema } from './ExamSheetSectionUpdateWithWhereUniqueWithoutSectionInput.schema';
import { ExamSheetSectionUpdateManyWithWhereWithoutSectionInputObjectSchema } from './ExamSheetSectionUpdateManyWithWhereWithoutSectionInput.schema';
import { ExamSheetSectionScalarWhereInputObjectSchema } from './ExamSheetSectionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateManyWithoutSectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetSectionCreateWithoutSectionInputObjectSchema),
          z
            .lazy(() => ExamSheetSectionCreateWithoutSectionInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionCreateOrConnectWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionCreateOrConnectWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetSectionCreateManySectionInputEnvelopeObjectSchema)
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
              ExamSheetSectionUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSheetSectionUpdateManyWithWhereWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetSectionUpdateManyWithWhereWithoutSectionInputObjectSchema,
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

export const ExamSheetSectionUpdateManyWithoutSectionNestedInputObjectSchema =
  Schema;
