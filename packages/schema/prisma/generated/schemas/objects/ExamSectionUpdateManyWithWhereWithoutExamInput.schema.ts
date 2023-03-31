import { z } from 'zod';
import { ExamSectionScalarWhereInputObjectSchema } from './ExamSectionScalarWhereInput.schema';
import { ExamSectionUpdateManyMutationInputObjectSchema } from './ExamSectionUpdateManyMutationInput.schema';
import { ExamSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema } from './ExamSectionUncheckedUpdateManyWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpdateManyWithWhereWithoutExamInput> =
  z
    .object({
      where: z.lazy(() => ExamSectionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSectionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ExamSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSectionUpdateManyWithWhereWithoutExamInputObjectSchema =
  Schema;
