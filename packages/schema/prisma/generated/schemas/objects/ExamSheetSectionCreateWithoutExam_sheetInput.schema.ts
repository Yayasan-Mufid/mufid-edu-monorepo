import { z } from 'zod';
import { ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateNestedOneWithoutSheet_sectionsInput.schema';
import { ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetItemCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateWithoutExam_sheetInput> = z
  .object({
    id: z.string().optional(),
    section: z.lazy(
      () => ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema,
    ),
    items: z
      .lazy(() => ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema = Schema;
