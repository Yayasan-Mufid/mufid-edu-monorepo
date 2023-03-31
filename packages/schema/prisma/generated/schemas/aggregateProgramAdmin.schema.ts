import { z } from 'zod';
import { ProgramAdminOrderByWithRelationInputObjectSchema } from './objects/ProgramAdminOrderByWithRelationInput.schema';
import { ProgramAdminWhereInputObjectSchema } from './objects/ProgramAdminWhereInput.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './objects/ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminCountAggregateInputObjectSchema } from './objects/ProgramAdminCountAggregateInput.schema';
import { ProgramAdminMinAggregateInputObjectSchema } from './objects/ProgramAdminMinAggregateInput.schema';
import { ProgramAdminMaxAggregateInputObjectSchema } from './objects/ProgramAdminMaxAggregateInput.schema';

export const ProgramAdminAggregateSchema = z.object({
  orderBy: z
    .union([
      ProgramAdminOrderByWithRelationInputObjectSchema,
      ProgramAdminOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProgramAdminWhereInputObjectSchema.optional(),
  cursor: ProgramAdminWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProgramAdminCountAggregateInputObjectSchema])
    .optional(),
  _min: ProgramAdminMinAggregateInputObjectSchema.optional(),
  _max: ProgramAdminMaxAggregateInputObjectSchema.optional(),
});
