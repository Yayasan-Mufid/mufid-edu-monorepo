import { z } from 'zod';
import { ExamSheetSectionCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionCreateWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutSectionInput.schema';
import { ExamSheetSectionCreateOrConnectWithoutSectionInputObjectSchema } from './ExamSheetSectionCreateOrConnectWithoutSectionInput.schema';
import { ExamSheetSectionCreateManySectionInputEnvelopeObjectSchema } from './ExamSheetSectionCreateManySectionInputEnvelope.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUncheckedCreateNestedManyWithoutSectionInput> =
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
      createMany: z
        .lazy(() => ExamSheetSectionCreateManySectionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetSectionUncheckedCreateNestedManyWithoutSectionInputObjectSchema =
  Schema;
