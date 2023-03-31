import { z } from 'zod';
import { StudyGroupAdminWhereInputObjectSchema } from './objects/StudyGroupAdminWhereInput.schema';
import { StudyGroupAdminOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupAdminOrderByWithAggregationInput.schema';
import { StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupAdminScalarWhereWithAggregatesInput.schema';
import { StudyGroupAdminScalarFieldEnumSchema } from './enums/StudyGroupAdminScalarFieldEnum.schema';

export const StudyGroupAdminGroupBySchema = z.object({
  where: StudyGroupAdminWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupAdminOrderByWithAggregationInputObjectSchema,
      StudyGroupAdminOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: StudyGroupAdminScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupAdminScalarFieldEnumSchema),
});
