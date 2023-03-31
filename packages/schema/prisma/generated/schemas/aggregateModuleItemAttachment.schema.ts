import { z } from 'zod';
import { ModuleItemAttachmentOrderByWithRelationInputObjectSchema } from './objects/ModuleItemAttachmentOrderByWithRelationInput.schema';
import { ModuleItemAttachmentWhereInputObjectSchema } from './objects/ModuleItemAttachmentWhereInput.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentCountAggregateInputObjectSchema } from './objects/ModuleItemAttachmentCountAggregateInput.schema';
import { ModuleItemAttachmentMinAggregateInputObjectSchema } from './objects/ModuleItemAttachmentMinAggregateInput.schema';
import { ModuleItemAttachmentMaxAggregateInputObjectSchema } from './objects/ModuleItemAttachmentMaxAggregateInput.schema';
import { ModuleItemAttachmentAvgAggregateInputObjectSchema } from './objects/ModuleItemAttachmentAvgAggregateInput.schema';
import { ModuleItemAttachmentSumAggregateInputObjectSchema } from './objects/ModuleItemAttachmentSumAggregateInput.schema';

export const ModuleItemAttachmentAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      ModuleItemAttachmentCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: ModuleItemAttachmentMinAggregateInputObjectSchema.optional(),
  _max: ModuleItemAttachmentMaxAggregateInputObjectSchema.optional(),
  _avg: ModuleItemAttachmentAvgAggregateInputObjectSchema.optional(),
  _sum: ModuleItemAttachmentSumAggregateInputObjectSchema.optional(),
});
