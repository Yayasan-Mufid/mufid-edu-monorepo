import { z } from 'zod';
import { ExamSheetSectionScalarWhereInputObjectSchema } from './ExamSheetSectionScalarWhereInput.schema';
import { ExamSheetSectionUpdateManyMutationInputObjectSchema } from './ExamSheetSectionUpdateManyMutationInput.schema';
import { ExamSheetSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema } from './ExamSheetSectionUncheckedUpdateManyWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateManyWithWhereWithoutExam_sheetInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetSectionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionUpdateManyWithWhereWithoutExam_sheetInputObjectSchema =
  Schema;
