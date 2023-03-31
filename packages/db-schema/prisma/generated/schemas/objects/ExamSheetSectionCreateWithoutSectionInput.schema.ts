import { z } from 'zod';
import { ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema } from './ExamSheetCreateNestedOneWithoutSectionsInput.schema';
import { ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema } from './ExamSheetItemCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateWithoutSectionInput> = z
  .object({
    id: z.string().optional(),
    exam_sheet: z.lazy(
      () => ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema,
    ),
    items: z
      .lazy(() => ExamSheetItemCreateNestedManyWithoutSectionInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSheetSectionCreateWithoutSectionInputObjectSchema = Schema;
