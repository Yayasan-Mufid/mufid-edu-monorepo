import { z } from 'zod';
import { ModuleItemAttachmentStatusOrderByWithRelationInputObjectSchema } from './objects/ModuleItemAttachmentStatusOrderByWithRelationInput.schema';
import { ModuleItemAttachmentStatusWhereInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereInput.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusCountAggregateInputObjectSchema } from './objects/ModuleItemAttachmentStatusCountAggregateInput.schema';
import { ModuleItemAttachmentStatusMinAggregateInputObjectSchema } from './objects/ModuleItemAttachmentStatusMinAggregateInput.schema';
import { ModuleItemAttachmentStatusMaxAggregateInputObjectSchema } from './objects/ModuleItemAttachmentStatusMaxAggregateInput.schema';

export const ModuleItemAttachmentStatusAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      ModuleItemAttachmentStatusCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: ModuleItemAttachmentStatusMinAggregateInputObjectSchema.optional(),
  _max: ModuleItemAttachmentStatusMaxAggregateInputObjectSchema.optional(),
});
