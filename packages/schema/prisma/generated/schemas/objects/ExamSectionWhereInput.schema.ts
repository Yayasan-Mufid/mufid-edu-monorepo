import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExamRelationFilterObjectSchema } from './ExamRelationFilter.schema';
import { ExamWhereInputObjectSchema } from './ExamWhereInput.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { ExamSectionQuestionListRelationFilterObjectSchema } from './ExamSectionQuestionListRelationFilter.schema';
import { ExamSheetSectionListRelationFilterObjectSchema } from './ExamSheetSectionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamSectionWhereInputObjectSchema),
        z.lazy(() => ExamSectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamSectionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamSectionWhereInputObjectSchema),
        z.lazy(() => ExamSectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exam: z
      .union([
        z.lazy(() => ExamRelationFilterObjectSchema),
        z.lazy(() => ExamWhereInputObjectSchema),
      ])
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
    questions: z
      .lazy(() => ExamSectionQuestionListRelationFilterObjectSchema)
      .optional(),
    sheet_sections: z
      .lazy(() => ExamSheetSectionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ExamSectionWhereInputObjectSchema = Schema;
