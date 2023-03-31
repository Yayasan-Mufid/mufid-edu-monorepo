import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnnouncementOrderByWithRelationInputObjectSchema } from './AnnouncementOrderByWithRelationInput.schema';
import { StudyGroupOrderByWithRelationInputObjectSchema } from './StudyGroupOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementOrderByWithRelationInput> =
  z
    .object({
      announcement_id: z.lazy(() => SortOrderSchema).optional(),
      announcement: z
        .lazy(() => AnnouncementOrderByWithRelationInputObjectSchema)
        .optional(),
      study_group_id: z.lazy(() => SortOrderSchema).optional(),
      study_group: z
        .lazy(() => StudyGroupOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementOrderByWithRelationInputObjectSchema =
  Schema;
