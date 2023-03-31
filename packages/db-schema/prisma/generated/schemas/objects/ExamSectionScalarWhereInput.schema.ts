import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSectionScalarWhereInputObjectSchema),
        z.lazy(() => ExamSectionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSectionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSectionScalarWhereInputObjectSchema),
        z.lazy(() => ExamSectionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    randomize_questions: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    nb_of_questions: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    default_point: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    weight: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ExamSectionScalarWhereInputObjectSchema = Schema;
