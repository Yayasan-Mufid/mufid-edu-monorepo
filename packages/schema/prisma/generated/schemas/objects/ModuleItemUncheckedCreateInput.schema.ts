import { z } from 'zod';
import { ModuleItemUncheckedCreateNestedManyWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedCreateNestedManyWithoutParent_itemInput.schema';
import { ModuleItemAttachmentUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateNestedManyWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedCreateNestedManyWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedCreateNestedManyWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedCreateNestedManyWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    module_id: z.string(),
    children: z
      .lazy(
        () =>
          ModuleItemUncheckedCreateNestedManyWithoutParent_itemInputObjectSchema,
      )
      .optional(),
    parent_item_id: z.string().optional().nullable(),
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
          ModuleItemAttachmentUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
    user_status: z
      .lazy(
        () =>
          ModuleItemStatusUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
    schedule: z
      .lazy(
        () =>
          StudyGroupScheduleUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
    quiz: z
      .lazy(
        () =>
          ModuleItemQuestionUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemUncheckedCreateInputObjectSchema = Schema;
