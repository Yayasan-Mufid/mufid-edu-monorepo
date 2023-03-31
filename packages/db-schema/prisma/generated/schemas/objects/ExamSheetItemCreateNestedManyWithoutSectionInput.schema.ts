import { z } from 'zod';
import { ExamSheetItemCreateWithoutSectionInputObjectSchema } from './ExamSheetItemCreateWithoutSectionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutSectionInput.schema';
import { ExamSheetItemCreateOrConnectWithoutSectionInputObjectSchema } from './ExamSheetItemCreateOrConnectWithoutSectionInput.schema';
import { ExamSheetItemCreateManySectionInputEnvelopeObjectSchema } from './ExamSheetItemCreateManySectionInputEnvelope.schema';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemCreateNestedManyWithoutSectionInput> =
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
      createMany: z
        .lazy(() => ExamSheetItemCreateManySectionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema =
  Schema;
