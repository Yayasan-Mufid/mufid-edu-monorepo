import { z } from 'zod';
import { AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementIncludeObjectSchema } from './objects/AnnouncementInclude.schema';
import { AnnouncementOrderByWithRelationInputObjectSchema } from './objects/AnnouncementOrderByWithRelationInput.schema';
import { AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';
import { AnnouncementScalarFieldEnumSchema } from './enums/AnnouncementScalarFieldEnum.schema';

export const AnnouncementFindManySchema = z.object({
  select: z.lazy(() => AnnouncementSelectObjectSchema.optional()),
  include: z.lazy(() => AnnouncementIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      AnnouncementOrderByWithRelationInputObjectSchema,
      AnnouncementOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AnnouncementWhereInputObjectSchema.optional(),
  cursor: AnnouncementWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnnouncementScalarFieldEnumSchema).optional(),
});
