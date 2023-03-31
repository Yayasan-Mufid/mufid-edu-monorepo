import { z } from 'zod';
import { ModuleItemAttachmentStatusSelectObjectSchema } from './objects/ModuleItemAttachmentStatusSelect.schema';
import { ModuleItemAttachmentStatusIncludeObjectSchema } from './objects/ModuleItemAttachmentStatusInclude.schema';
import { ModuleItemAttachmentStatusOrderByWithRelationInputObjectSchema } from './objects/ModuleItemAttachmentStatusOrderByWithRelationInput.schema';
import { ModuleItemAttachmentStatusWhereInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereInput.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusScalarFieldEnumSchema } from './enums/ModuleItemAttachmentStatusScalarFieldEnum.schema';

export const ModuleItemAttachmentStatusFindManySchema = z.object({
  select: z.lazy(() => ModuleItemAttachmentStatusSelectObjectSchema.optional()),
  include: z.lazy(() =>
    ModuleItemAttachmentStatusIncludeObjectSchema.optional(),
  ),
  orderBy: z
    .union([
      ModuleItemAttachmentStatusOrderByWithRelationInputObjectSchema,
      ModuleItemAttachmentStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemAttachmentStatusWhereInputObjectSchema.optional(),
  cursor: ModuleItemAttachmentStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleItemAttachmentStatusScalarFieldEnumSchema).optional(),
});
