import { z } from 'zod';
import { StudyGroupAnnouncementWhereInputObjectSchema } from './objects/StudyGroupAnnouncementWhereInput.schema';
import { StudyGroupAnnouncementOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupAnnouncementOrderByWithAggregationInput.schema';
import { StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupAnnouncementScalarWhereWithAggregatesInput.schema';
import { StudyGroupAnnouncementScalarFieldEnumSchema } from './enums/StudyGroupAnnouncementScalarFieldEnum.schema';

export const StudyGroupAnnouncementGroupBySchema = z.object({
  where: StudyGroupAnnouncementWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupAnnouncementOrderByWithAggregationInputObjectSchema,
      StudyGroupAnnouncementOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    StudyGroupAnnouncementScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupAnnouncementScalarFieldEnumSchema),
});
