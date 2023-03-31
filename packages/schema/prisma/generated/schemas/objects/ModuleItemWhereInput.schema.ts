import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleRelationFilterObjectSchema } from './ModuleRelationFilter.schema';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';
import { ModuleItemListRelationFilterObjectSchema } from './ModuleItemListRelationFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ModuleItemRelationFilterObjectSchema } from './ModuleItemRelationFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ModuleItemAttachmentListRelationFilterObjectSchema } from './ModuleItemAttachmentListRelationFilter.schema';
import { ModuleItemStatusListRelationFilterObjectSchema } from './ModuleItemStatusListRelationFilter.schema';
import { StudyGroupScheduleListRelationFilterObjectSchema } from './StudyGroupScheduleListRelationFilter.schema';
import { ModuleItemQuestionListRelationFilterObjectSchema } from './ModuleItemQuestionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemWhereInputObjectSchema),
        z.lazy(() => ModuleItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemWhereInputObjectSchema),
        z.lazy(() => ModuleItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
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
    children: z.lazy(() => ModuleItemListRelationFilterObjectSchema).optional(),
    parent_item_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    parent_item: z
      .union([
        z.lazy(() => ModuleItemRelationFilterObjectSchema),
        z.lazy(() => ModuleItemWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    is_root: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    is_quiz: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mandatory: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    cover_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    attachments: z
      .lazy(() => ModuleItemAttachmentListRelationFilterObjectSchema)
      .optional(),
    user_status: z
      .lazy(() => ModuleItemStatusListRelationFilterObjectSchema)
      .optional(),
    schedule: z
      .lazy(() => StudyGroupScheduleListRelationFilterObjectSchema)
      .optional(),
    quiz: z
      .lazy(() => ModuleItemQuestionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemWhereInputObjectSchema = Schema;
