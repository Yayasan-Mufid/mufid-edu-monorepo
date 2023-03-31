import { z } from 'zod';
import { ExamSheetSectionScalarWhereInputObjectSchema } from './ExamSheetSectionScalarWhereInput.schema';
import { ExamSheetSectionUpdateManyMutationInputObjectSchema } from './ExamSheetSectionUpdateManyMutationInput.schema';
import { ExamSheetSectionUncheckedUpdateManyWithoutSheet_sectionsInputObjectSchema } from './ExamSheetSectionUncheckedUpdateManyWithoutSheet_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateManyWithWhereWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetSectionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetSectionUncheckedUpdateManyWithoutSheet_sectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionUpdateManyWithWhereWithoutSectionInputObjectSchema =
  Schema;
