import { z } from 'zod';
import { StudyGroupAnnouncementSelectObjectSchema } from './objects/StudyGroupAnnouncementSelect.schema';
import { StudyGroupAnnouncementIncludeObjectSchema } from './objects/StudyGroupAnnouncementInclude.schema';
import { StudyGroupAnnouncementOrderByWithRelationInputObjectSchema } from './objects/StudyGroupAnnouncementOrderByWithRelationInput.schema';
import { StudyGroupAnnouncementWhereInputObjectSchema } from './objects/StudyGroupAnnouncementWhereInput.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './objects/StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementScalarFieldEnumSchema } from './enums/StudyGroupAnnouncementScalarFieldEnum.schema';

export const StudyGroupAnnouncementFindManySchema = z.object({
  select: z.lazy(() => StudyGroupAnnouncementSelectObjectSchema.optional()),
  include: z.lazy(() => StudyGroupAnnouncementIncludeObjectSchema.optional()),
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
  distinct: z.array(StudyGroupAnnouncementScalarFieldEnumSchema).optional(),
});
