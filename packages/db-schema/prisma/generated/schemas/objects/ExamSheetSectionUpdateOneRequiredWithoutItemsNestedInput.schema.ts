import { z } from 'zod';
import { ExamSheetSectionCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateWithoutItemsInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutItemsInput.schema';
import { ExamSheetSectionCreateOrConnectWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateOrConnectWithoutItemsInput.schema';
import { ExamSheetSectionUpsertWithoutItemsInputObjectSchema } from './ExamSheetSectionUpsertWithoutItemsInput.schema';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithoutItemsInputObjectSchema } from './ExamSheetSectionUpdateWithoutItemsInput.schema';
import { ExamSheetSectionUncheckedUpdateWithoutItemsInputObjectSchema } from './ExamSheetSectionUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateOneRequiredWithoutItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetSectionCreateWithoutItemsInputObjectSchema),
          z.lazy(
            () => ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ExamSheetSectionCreateOrConnectWithoutItemsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ExamSheetSectionUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ExamSheetSectionUpdateWithoutItemsInputObjectSchema),
          z.lazy(
            () => ExamSheetSectionUncheckedUpdateWithoutItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetSectionUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
