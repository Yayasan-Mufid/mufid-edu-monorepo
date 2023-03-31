import { z } from 'zod';
import { ProgramArgsObjectSchema } from './ProgramArgs.schema';
import { ModuleAdminFindManySchema } from '../findManyModuleAdmin.schema';
import { ModuleItemFindManySchema } from '../findManyModuleItem.schema';
import { ModuleAccessFindManySchema } from '../findManyModuleAccess.schema';
import { StudyGroupFindManySchema } from '../findManyStudyGroup.schema';
import { QuestionFindManySchema } from '../findManyQuestion.schema';
import { ExamFindManySchema } from '../findManyExam.schema';
import { ModuleCountOutputTypeArgsObjectSchema } from './ModuleCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleInclude> = z
  .object({
    program: z
      .union([z.boolean(), z.lazy(() => ProgramArgsObjectSchema)])
      .optional(),
    admins: z
      .union([z.boolean(), z.lazy(() => ModuleAdminFindManySchema)])
      .optional(),
    items: z
      .union([z.boolean(), z.lazy(() => ModuleItemFindManySchema)])
      .optional(),
    students: z
      .union([z.boolean(), z.lazy(() => ModuleAccessFindManySchema)])
      .optional(),
    study_groups: z
      .union([z.boolean(), z.lazy(() => StudyGroupFindManySchema)])
      .optional(),
    questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    exams: z.union([z.boolean(), z.lazy(() => ExamFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ModuleCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ModuleIncludeObjectSchema = Schema;
