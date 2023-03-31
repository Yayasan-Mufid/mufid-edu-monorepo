import { z } from 'zod';
import { ModuleAdminUncheckedCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedCreateNestedManyWithoutModuleInput.schema';
import { ModuleAccessUncheckedCreateNestedManyWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedCreateNestedManyWithoutModuleInput.schema';
import { StudyGroupUncheckedCreateNestedManyWithoutModuleInputObjectSchema } from './StudyGroupUncheckedCreateNestedManyWithoutModuleInput.schema';
import { QuestionUncheckedCreateNestedManyWithoutModuleInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutModuleInput.schema';
import { ExamUncheckedCreateNestedManyWithoutModuleInputObjectSchema } from './ExamUncheckedCreateNestedManyWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    program_id: z.string(),
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
      .lazy(
        () =>
          ModuleAdminUncheckedCreateNestedManyWithoutModuleInputObjectSchema,
      )
      .optional(),
    students: z
      .lazy(
        () =>
          ModuleAccessUncheckedCreateNestedManyWithoutModuleInputObjectSchema,
      )
      .optional(),
    study_groups: z
      .lazy(
        () => StudyGroupUncheckedCreateNestedManyWithoutModuleInputObjectSchema,
      )
      .optional(),
    questions: z
      .lazy(
        () => QuestionUncheckedCreateNestedManyWithoutModuleInputObjectSchema,
      )
      .optional(),
    exams: z
      .lazy(() => ExamUncheckedCreateNestedManyWithoutModuleInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleUncheckedCreateWithoutItemsInputObjectSchema = Schema;
