import { z } from 'zod';
import { ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema } from './ExamSheetCreateNestedOneWithoutSectionsInput.schema';
import { ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateNestedOneWithoutSheet_sectionsInput.schema';
import { ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetItemCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateInput> = z
  .object({
    id: z.string().optional(),
    exam_sheet: z.lazy(
      () => ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema,
    ),
    section: z.lazy(
      () => ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema,
    ),
    items: z
      .lazy(() => ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionCreateInputObjectSchema = Schema;
