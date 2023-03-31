import { z } from 'zod';
import { ProgramAdminWhereInputObjectSchema } from './objects/ProgramAdminWhereInput.schema';
import { ProgramAdminOrderByWithAggregationInputObjectSchema } from './objects/ProgramAdminOrderByWithAggregationInput.schema';
import { ProgramAdminScalarWhereWithAggregatesInputObjectSchema } from './objects/ProgramAdminScalarWhereWithAggregatesInput.schema';
import { ProgramAdminScalarFieldEnumSchema } from './enums/ProgramAdminScalarFieldEnum.schema';

export const ProgramAdminGroupBySchema = z.object({
  where: ProgramAdminWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProgramAdminOrderByWithAggregationInputObjectSchema,
      ProgramAdminOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProgramAdminScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProgramAdminScalarFieldEnumSchema),
});
