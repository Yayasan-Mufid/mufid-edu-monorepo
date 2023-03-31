import { z } from 'zod';
import { ProgramCreateNestedOneWithoutModulesInputObjectSchema } from './ProgramCreateNestedOneWithoutModulesInput.schema';
import { ModuleAdminCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleAdminCreateNestedManyWithoutModuleInput.schema';
import { ModuleItemCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleItemCreateNestedManyWithoutModuleInput.schema';
import { ModuleAccessCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleAccessCreateNestedManyWithoutModuleInput.schema';
import { StudyGroupCreateNestedManyWithoutModuleInputObjectSchema } from './StudyGroupCreateNestedManyWithoutModuleInput.schema';
import { QuestionCreateNestedManyWithoutModuleInputObjectSchema } from './QuestionCreateNestedManyWithoutModuleInput.schema';
import { ExamCreateNestedManyWithoutModuleInputObjectSchema } from './ExamCreateNestedManyWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    slug: z.string().optional().nullable(),
    description: z.string(),
    published: z.date().optional().nullable(),
    archived: z.boolean().optional(),
    seq: z.number(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
    program: z.lazy(
      () => ProgramCreateNestedOneWithoutModulesInputObjectSchema,
    ),
    admins: z
      .lazy(() => ModuleAdminCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => ModuleItemCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
    students: z
      .lazy(() => ModuleAccessCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
    study_groups: z
      .lazy(() => StudyGroupCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
    exams: z
      .lazy(() => ExamCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleCreateInputObjectSchema = Schema;