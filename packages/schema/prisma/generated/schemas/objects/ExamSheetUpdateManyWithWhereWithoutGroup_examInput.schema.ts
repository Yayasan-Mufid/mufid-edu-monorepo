import { z } from 'zod';
import { ExamSheetScalarWhereInputObjectSchema } from './ExamSheetScalarWhereInput.schema';
import { ExamSheetUpdateManyMutationInputObjectSchema } from './ExamSheetUpdateManyMutationInput.schema';
import { ExamSheetUncheckedUpdateManyWithoutSheetsInputObjectSchema } from './ExamSheetUncheckedUpdateManyWithoutSheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateManyWithWhereWithoutGroup_examInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ExamSheetUncheckedUpdateManyWithoutSheetsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetUpdateManyWithWhereWithoutGroup_examInputObjectSchema =
  Schema;
