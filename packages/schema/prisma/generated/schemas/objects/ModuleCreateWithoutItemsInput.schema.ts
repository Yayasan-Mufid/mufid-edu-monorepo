import { z } from 'zod';
import { ProgramCreateNestedOneWithoutModulesInputObjectSchema } from './ProgramCreateNestedOneWithoutModulesInput.schema';
import { ModuleAdminCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleAdminCreateNestedManyWithoutModuleInput.schema';
import { ModuleAccessCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleAccessCreateNestedManyWithoutModuleInput.schema';
import { StudyGroupCreateNestedManyWithoutModuleInputObjectSchema } from './StudyGroupCreateNestedManyWithoutModuleInput.schema';
import { QuestionCreateNestedManyWithoutModuleInputObjectSchema } from './QuestionCreateNestedManyWithoutModuleInput.schema';
import { ExamCreateNestedManyWithoutModuleInputObjectSchema } from './ExamCreateNestedManyWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    program: z.lazy(
      () => ProgramCreateNestedOneWithoutModulesInputObjectSchema,
    ),
    title: z.string(),
    code: z.string(),
    slug: z.string().optional().nullable(),
    description: z.string(),
    published: z.date().optional().nullable(),
    archived: z.boolean().optional(),
    seq: z.number(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
    admins: z
      .lazy(() => ModuleAdminCreateNestedManyWithoutModuleInputObjectSchema)
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

export const ModuleCreateWithoutItemsInputObjectSchema = Schema;
