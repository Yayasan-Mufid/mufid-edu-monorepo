import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereInput.schema';
import { ModuleItemAttachmentStatusOrderByWithAggregationInputObjectSchema } from './objects/ModuleItemAttachmentStatusOrderByWithAggregationInput.schema';
import { ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleItemAttachmentStatusScalarWhereWithAggregatesInput.schema';
import { ModuleItemAttachmentStatusScalarFieldEnumSchema } from './enums/ModuleItemAttachmentStatusScalarFieldEnum.schema';

export const ModuleItemAttachmentStatusGroupBySchema = z.object({
  where: ModuleItemAttachmentStatusWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemAttachmentStatusOrderByWithAggregationInputObjectSchema,
      ModuleItemAttachmentStatusOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ModuleItemAttachmentStatusScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleItemAttachmentStatusScalarFieldEnumSchema),
});
