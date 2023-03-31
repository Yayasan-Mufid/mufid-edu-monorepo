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

const Schema: z.ZodType<Prisma.ModuleSelect> = z
  .object({
    id: z.boolean().optional(),
    program_id: z.boolean().optional(),
    program: z
      .union([z.boolean(), z.lazy(() => ProgramArgsObjectSchema)])
      .optional(),
    title: z.boolean().optional(),
    code: z.boolean().optional(),
    slug: z.boolean().optional(),
    description: z.boolean().optional(),
    published: z.boolean().optional(),
    archived: z.boolean().optional(),
    seq: z.boolean().optional(),
    cover_img_url: z.boolean().optional(),
    bg_img_url: z.boolean().optional(),
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

export const ModuleSelectObjectSchema = Schema;
