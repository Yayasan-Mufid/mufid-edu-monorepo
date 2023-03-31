import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './ModuleOrderByWithRelationInput.schema';
import { ModuleItemOrderByRelationAggregateInputObjectSchema } from './ModuleItemOrderByRelationAggregateInput.schema';
import { ModuleItemAttachmentOrderByRelationAggregateInputObjectSchema } from './ModuleItemAttachmentOrderByRelationAggregateInput.schema';
import { ModuleItemStatusOrderByRelationAggregateInputObjectSchema } from './ModuleItemStatusOrderByRelationAggregateInput.schema';
import { StudyGroupScheduleOrderByRelationAggregateInputObjectSchema } from './StudyGroupScheduleOrderByRelationAggregateInput.schema';
import { ModuleItemQuestionOrderByRelationAggregateInputObjectSchema } from './ModuleItemQuestionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    module: z.lazy(() => ModuleOrderByWithRelationInputObjectSchema).optional(),
    children: z
      .lazy(() => ModuleItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    parent_item_id: z.lazy(() => SortOrderSchema).optional(),
    parent_item: z
      .lazy(() => ModuleItemOrderByWithRelationInputObjectSchema)
      .optional(),
    is_root: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    seq: z.lazy(() => SortOrderSchema).optional(),
    is_quiz: z.lazy(() => SortOrderSchema).optional(),
    mandatory: z.lazy(() => SortOrderSchema).optional(),
    cover_img_url: z.lazy(() => SortOrderSchema).optional(),
    bg_img_url: z.lazy(() => SortOrderSchema).optional(),
    attachments: z
      .lazy(() => ModuleItemAttachmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    user_status: z
      .lazy(() => ModuleItemStatusOrderByRelationAggregateInputObjectSchema)
      .optional(),
    schedule: z
      .lazy(() => StudyGroupScheduleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    quiz: z
      .lazy(() => ModuleItemQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemOrderByWithRelationInputObjectSchema = Schema;
