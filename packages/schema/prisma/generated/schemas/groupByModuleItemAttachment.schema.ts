import { z } from 'zod';
import { ModuleItemAttachmentWhereInputObjectSchema } from './objects/ModuleItemAttachmentWhereInput.schema';
import { ModuleItemAttachmentOrderByWithAggregationInputObjectSchema } from './objects/ModuleItemAttachmentOrderByWithAggregationInput.schema';
import { ModuleItemAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleItemAttachmentScalarWhereWithAggregatesInput.schema';
import { ModuleItemAttachmentScalarFieldEnumSchema } from './enums/ModuleItemAttachmentScalarFieldEnum.schema';

export const ModuleItemAttachmentGroupBySchema = z.object({
  where: ModuleItemAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemAttachmentOrderByWithAggregationInputObjectSchema,
      ModuleItemAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ModuleItemAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleItemAttachmentScalarFieldEnumSchema),
});
