import { z } from 'zod';
import { StudyGroupAnnouncementOrderByWithRelationInputObjectSchema } from './objects/StudyGroupAnnouncementOrderByWithRelationInput.schema';
import { StudyGroupAnnouncementWhereInputObjectSchema } from './objects/StudyGroupAnnouncementWhereInput.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './objects/StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementCountAggregateInputObjectSchema } from './objects/StudyGroupAnnouncementCountAggregateInput.schema';
import { StudyGroupAnnouncementMinAggregateInputObjectSchema } from './objects/StudyGroupAnnouncementMinAggregateInput.schema';
import { StudyGroupAnnouncementMaxAggregateInputObjectSchema } from './objects/StudyGroupAnnouncementMaxAggregateInput.schema';

export const StudyGroupAnnouncementAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupAnnouncementOrderByWithRelationInputObjectSchema,
      StudyGroupAnnouncementOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupAnnouncementWhereInputObjectSchema.optional(),
  cursor: StudyGroupAnnouncementWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      StudyGroupAnnouncementCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: StudyGroupAnnouncementMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupAnnouncementMaxAggregateInputObjectSchema.optional(),
});
