import { z } from 'zod';
import { ExamSheetItemCreateWithoutSectionInputObjectSchema } from './ExamSheetItemCreateWithoutSectionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutSectionInput.schema';
import { ExamSheetItemCreateOrConnectWithoutSectionInputObjectSchema } from './ExamSheetItemCreateOrConnectWithoutSectionInput.schema';
import { ExamSheetItemUpsertWithWhereUniqueWithoutSectionInputObjectSchema } from './ExamSheetItemUpsertWithWhereUniqueWithoutSectionInput.schema';
import { ExamSheetItemCreateManySectionInputEnvelopeObjectSchema } from './ExamSheetItemCreateManySectionInputEnvelope.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithWhereUniqueWithoutSectionInputObjectSchema } from './ExamSheetItemUpdateWithWhereUniqueWithoutSectionInput.schema';
import { ExamSheetItemUpdateManyWithWhereWithoutSectionInputObjectSchema } from './ExamSheetItemUpdateManyWithWhereWithoutSectionInput.schema';
import { ExamSheetItemScalarWhereInputObjectSchema } from './ExamSheetItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateManyWithoutSectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetItemCreateWithoutSectionInputObjectSchema),
          z
            .lazy(() => ExamSheetItemCreateWithoutSectionInputObjectSchema)
            .array(),
          z.lazy(
            () => ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExamSheetItemCreateOrConnectWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSheetItemCreateOrConnectWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSheetItemCreateManySectionInputEnvelopeObjectSchema)
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
              ExamSheetItemUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSheetItemUpdateManyWithWhereWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSheetItemUpdateManyWithWhereWithoutSectionInputObjectSchema,
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

export const ExamSheetItemUpdateManyWithoutSectionNestedInputObjectSchema =
  Schema;
