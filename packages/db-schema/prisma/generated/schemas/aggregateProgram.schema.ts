import { z } from 'zod';
import { ProgramOrderByWithRelationInputObjectSchema } from './objects/ProgramOrderByWithRelationInput.schema';
import { ProgramWhereInputObjectSchema } from './objects/ProgramWhereInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';
import { ProgramCountAggregateInputObjectSchema } from './objects/ProgramCountAggregateInput.schema';
import { ProgramMinAggregateInputObjectSchema } from './objects/ProgramMinAggregateInput.schema';
import { ProgramMaxAggregateInputObjectSchema } from './objects/ProgramMaxAggregateInput.schema';

export const ProgramAggregateSchema = z.object({
  orderBy: z
    .union([
      ProgramOrderByWithRelationInputObjectSchema,
      ProgramOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProgramWhereInputObjectSchema.optional(),
  cursor: ProgramWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProgramCountAggregateInputObjectSchema])
    .optional(),
  _min: ProgramMinAggregateInputObjectSchema.optional(),
  _max: ProgramMaxAggregateInputObjectSchema.optional(),
});
