import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleRelationFilterObjectSchema } from './ModuleRelationFilter.schema';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';
import { ExamSectionListRelationFilterObjectSchema } from './ExamSectionListRelationFilter.schema';
import { StudyGroupExamListRelationFilterObjectSchema } from './StudyGroupExamListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExamWhereInputObjectSchema),
        z.lazy(() => ExamWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExamWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExamWhereInputObjectSchema),
        z.lazy(() => ExamWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module: z
      .union([
        z.lazy(() => ModuleRelationFilterObjectSchema),
        z.lazy(() => ModuleWhereInputObjectSchema),
      ])
      .optional(),
    rules: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sections: z
      .lazy(() => ExamSectionListRelationFilterObjectSchema)
      .optional(),
    study_group_exams: z
      .lazy(() => StudyGroupExamListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ExamWhereInputObjectSchema = Schema;
