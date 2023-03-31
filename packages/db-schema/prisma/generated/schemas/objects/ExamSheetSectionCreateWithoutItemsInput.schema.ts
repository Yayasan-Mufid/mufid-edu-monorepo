import { z } from 'zod';
import { ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema } from './ExamSheetCreateNestedOneWithoutSectionsInput.schema';
import { ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateNestedOneWithoutSheet_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    exam_sheet: z.lazy(
      () => ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema,
    ),
    section: z.lazy(
      () => ExamSectionCreateNestedOneWithoutSheet_sectionsInputObjectSchema,
    ),
  })
  .strict();

export const ExamSheetSectionCreateWithoutItemsInputObjectSchema = Schema;
