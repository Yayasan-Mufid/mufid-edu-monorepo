import { z } from 'zod';
import { ModuleItemAttachmentSelectObjectSchema } from './objects/ModuleItemAttachmentSelect.schema';
import { ModuleItemAttachmentIncludeObjectSchema } from './objects/ModuleItemAttachmentInclude.schema';
import { ModuleItemAttachmentOrderByWithRelationInputObjectSchema } from './objects/ModuleItemAttachmentOrderByWithRelationInput.schema';
import { ModuleItemAttachmentWhereInputObjectSchema } from './objects/ModuleItemAttachmentWhereInput.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentScalarFieldEnumSchema } from './enums/ModuleItemAttachmentScalarFieldEnum.schema';

export const ModuleItemAttachmentFindManySchema = z.object({
  select: z.lazy(() => ModuleItemAttachmentSelectObjectSchema.optional()),
  include: z.lazy(() => ModuleItemAttachmentIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ModuleItemAttachmentOrderByWithRelationInputObjectSchema,
      ModuleItemAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemAttachmentWhereInputObjectSchema.optional(),
  cursor: ModuleItemAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleItemAttachmentScalarFieldEnumSchema).optional(),
});
