import { z } from 'zod';
import { ModuleArgsObjectSchema } from './ModuleArgs.schema';
import { ExamSectionFindManySchema } from '../findManyExamSection.schema';
import { StudyGroupExamFindManySchema } from '../findManyStudyGroupExam.schema';
import { ExamCountOutputTypeArgsObjectSchema } from './ExamCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    code: z.boolean().optional(),
    module_id: z.boolean().optional(),
    module: z
      .union([z.boolean(), z.lazy(() => ModuleArgsObjectSchema)])
      .optional(),
    rules: z.boolean().optional(),
    sections: z
      .union([z.boolean(), z.lazy(() => ExamSectionFindManySchema)])
      .optional(),
    study_group_exams: z
      .union([z.boolean(), z.lazy(() => StudyGroupExamFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ExamCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ExamSelectObjectSchema = Schema;
