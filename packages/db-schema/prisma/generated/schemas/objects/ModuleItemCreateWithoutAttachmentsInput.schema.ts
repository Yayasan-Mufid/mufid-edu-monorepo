import { z } from 'zod';
import { ModuleCreateNestedOneWithoutItemsInputObjectSchema } from './ModuleCreateNestedOneWithoutItemsInput.schema';
import { ModuleItemCreateNestedManyWithoutParent_itemInputObjectSchema } from './ModuleItemCreateNestedManyWithoutParent_itemInput.schema';
import { ModuleItemCreateNestedOneWithoutChildrenInputObjectSchema } from './ModuleItemCreateNestedOneWithoutChildrenInput.schema';
import { ModuleItemStatusCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateNestedManyWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateNestedManyWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateNestedManyWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateNestedManyWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateWithoutAttachmentsInput> = z
  .object({
    id: z.string().optional(),
    is_root: z.boolean().optional().nullable(),
    title: z.string(),
    code: z.string(),
    text: z.string(),
    seq: z.number().optional(),
    is_quiz: z.boolean().optional(),
    mandatory: z.boolean().optional(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutItemsInputObjectSchema),
    children: z
      .lazy(() => ModuleItemCreateNestedManyWithoutParent_itemInputObjectSchema)
      .optional(),
    parent_item: z
      .lazy(() => ModuleItemCreateNestedOneWithoutChildrenInputObjectSchema)
      .optional(),
    user_status: z
      .lazy(
        () =>
          ModuleItemStatusCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
    schedule: z
      .lazy(
        () =>
          StudyGroupScheduleCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
    quiz: z
      .lazy(
        () =>
          ModuleItemQuestionCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemCreateWithoutAttachmentsInputObjectSchema = Schema;