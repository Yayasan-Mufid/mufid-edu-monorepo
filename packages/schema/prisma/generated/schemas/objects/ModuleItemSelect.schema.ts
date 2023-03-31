import { z } from 'zod';
import { ModuleArgsObjectSchema } from './ModuleArgs.schema';
import { ModuleItemFindManySchema } from '../findManyModuleItem.schema';
import { ModuleItemArgsObjectSchema } from './ModuleItemArgs.schema';
import { ModuleItemAttachmentFindManySchema } from '../findManyModuleItemAttachment.schema';
import { ModuleItemStatusFindManySchema } from '../findManyModuleItemStatus.schema';
import { StudyGroupScheduleFindManySchema } from '../findManyStudyGroupSchedule.schema';
import { ModuleItemQuestionFindManySchema } from '../findManyModuleItemQuestion.schema';
import { ModuleItemCountOutputTypeArgsObjectSchema } from './ModuleItemCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemSelect> = z
  .object({
    id: z.boolean().optional(),
    module_id: z.boolean().optional(),
    module: z
      .union([z.boolean(), z.lazy(() => ModuleArgsObjectSchema)])
      .optional(),
    children: z
      .union([z.boolean(), z.lazy(() => ModuleItemFindManySchema)])
      .optional(),
    parent_item_id: z.boolean().optional(),
    parent_item: z
      .union([z.boolean(), z.lazy(() => ModuleItemArgsObjectSchema)])
      .optional(),
    is_root: z.boolean().optional(),
    title: z.boolean().optional(),
    code: z.boolean().optional(),
    text: z.boolean().optional(),
    seq: z.boolean().optional(),
    is_quiz: z.boolean().optional(),
    mandatory: z.boolean().optional(),
    cover_img_url: z.boolean().optional(),
    bg_img_url: z.boolean().optional(),
    attachments: z
      .union([z.boolean(), z.lazy(() => ModuleItemAttachmentFindManySchema)])
      .optional(),
    user_status: z
      .union([z.boolean(), z.lazy(() => ModuleItemStatusFindManySchema)])
      .optional(),
    schedule: z
      .union([z.boolean(), z.lazy(() => StudyGroupScheduleFindManySchema)])
      .optional(),
    quiz: z
      .union([z.boolean(), z.lazy(() => ModuleItemQuestionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemSelectObjectSchema = Schema;
