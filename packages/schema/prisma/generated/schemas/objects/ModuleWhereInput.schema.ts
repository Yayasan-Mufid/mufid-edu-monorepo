import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProgramRelationFilterObjectSchema } from './ProgramRelationFilter.schema';
import { ProgramWhereInputObjectSchema } from './ProgramWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ModuleAdminListRelationFilterObjectSchema } from './ModuleAdminListRelationFilter.schema';
import { ModuleItemListRelationFilterObjectSchema } from './ModuleItemListRelationFilter.schema';
import { ModuleAccessListRelationFilterObjectSchema } from './ModuleAccessListRelationFilter.schema';
import { StudyGroupListRelationFilterObjectSchema } from './StudyGroupListRelationFilter.schema';
import { QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema';
import { ExamListRelationFilterObjectSchema } from './ExamListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleWhereInputObjectSchema),
        z.lazy(() => ModuleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleWhereInputObjectSchema),
        z.lazy(() => ModuleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program: z
      .union([
        z.lazy(() => ProgramRelationFilterObjectSchema),
        z.lazy(() => ProgramWhereInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    published: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    archived: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    cover_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    admins: z.lazy(() => ModuleAdminListRelationFilterObjectSchema).optional(),
    items: z.lazy(() => ModuleItemListRelationFilterObjectSchema).optional(),
    students: z
      .lazy(() => ModuleAccessListRelationFilterObjectSchema)
      .optional(),
    study_groups: z
      .lazy(() => StudyGroupListRelationFilterObjectSchema)
      .optional(),
    questions: z.lazy(() => QuestionListRelationFilterObjectSchema).optional(),
    exams: z.lazy(() => ExamListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ModuleWhereInputObjectSchema = Schema;
