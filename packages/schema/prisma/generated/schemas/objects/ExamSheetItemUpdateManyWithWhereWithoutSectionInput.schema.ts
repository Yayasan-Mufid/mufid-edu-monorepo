import { z } from 'zod';
import { ExamSheetItemScalarWhereInputObjectSchema } from './ExamSheetItemScalarWhereInput.schema';
import { ExamSheetItemUpdateManyMutationInputObjectSchema } from './ExamSheetItemUpdateManyMutationInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateManyWithWhereWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateManyWithoutItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpdateManyWithWhereWithoutSectionInputObjectSchema =
  Schema;
