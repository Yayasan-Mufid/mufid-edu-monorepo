import { z } from 'zod';
import { ModuleCreateNestedOneWithoutItemsInputObjectSchema } from './ModuleCreateNestedOneWithoutItemsInput.schema';
import { ModuleItemCreateNestedManyWithoutParent_itemInputObjectSchema } from './ModuleItemCreateNestedManyWithoutParent_itemInput.schema';
import { ModuleItemAttachmentCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateNestedManyWithoutModule_itemInput.schema';
import { ModuleItemStatusCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateNestedManyWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateNestedManyWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateNestedManyWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateNestedManyWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateWithoutParent_itemInput> = z
  .object({
    id: z.string().optional(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutItemsInputObjectSchema),
    children: z
      .lazy(() => ModuleItemCreateNestedManyWithoutParent_itemInputObjectSchema)
      .optional(),
    is_root: z.boolean().optional().nullable(),
    title: z.string(),
    code: z.string(),
    text: z.string(),
    seq: z.number().optional(),
    is_quiz: z.boolean().optional(),
    mandatory: z.boolean().optional(),
    cover_img_url: z.string().optional().nullable(),
    bg_img_url: z.string().optional().nullable(),
    attachments: z
      .lazy(
        () =>
          ModuleItemAttachmentCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
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

export const ModuleItemCreateWithoutParent_itemInputObjectSchema = Schema;
