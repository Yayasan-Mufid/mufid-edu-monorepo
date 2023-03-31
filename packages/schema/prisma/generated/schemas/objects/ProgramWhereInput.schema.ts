import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ModuleListRelationFilterObjectSchema } from './ModuleListRelationFilter.schema';
import { ProgramAdminListRelationFilterObjectSchema } from './ProgramAdminListRelationFilter.schema';
import { QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProgramWhereInputObjectSchema),
        z.lazy(() => ProgramWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProgramWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProgramWhereInputObjectSchema),
        z.lazy(() => ProgramWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cover_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    modules: z.lazy(() => ModuleListRelationFilterObjectSchema).optional(),
    admins: z.lazy(() => ProgramAdminListRelationFilterObjectSchema).optional(),
    questions: z.lazy(() => QuestionListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ProgramWhereInputObjectSchema = Schema;
