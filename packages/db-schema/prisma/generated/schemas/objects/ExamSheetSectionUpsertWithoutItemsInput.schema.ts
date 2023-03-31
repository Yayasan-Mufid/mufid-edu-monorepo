import { z } from 'zod';
import { ExamSheetSectionUpdateWithoutItemsInputObjectSchema } from './ExamSheetSectionUpdateWithoutItemsInput.schema';
import { ExamSheetSectionUncheckedUpdateWithoutItemsInputObjectSchema } from './ExamSheetSectionUncheckedUpdateWithoutItemsInput.schema';
import { ExamSheetSectionCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionCreateWithoutItemsInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ExamSheetSectionUpdateWithoutItemsInputObjectSchema),
      z.lazy(
        () => ExamSheetSectionUncheckedUpdateWithoutItemsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ExamSheetSectionCreateWithoutItemsInputObjectSchema),
      z.lazy(
        () => ExamSheetSectionUncheckedCreateWithoutItemsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ExamSheetSectionUpsertWithoutItemsInputObjectSchema = Schema;
