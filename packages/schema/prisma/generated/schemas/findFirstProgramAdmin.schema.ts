import { z } from 'zod';
import { ProgramAdminSelectObjectSchema } from './objects/ProgramAdminSelect.schema';
import { ProgramAdminIncludeObjectSchema } from './objects/ProgramAdminInclude.schema';
import { ProgramAdminOrderByWithRelationInputObjectSchema } from './objects/ProgramAdminOrderByWithRelationInput.schema';
import { ProgramAdminWhereInputObjectSchema } from './objects/ProgramAdminWhereInput.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './objects/ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminScalarFieldEnumSchema } from './enums/ProgramAdminScalarFieldEnum.schema';

export const ProgramAdminFindFirstSchema = z.object({
  select: ProgramAdminSelectObjectSchema.optional(),
  include: ProgramAdminIncludeObjectSchema.optional(),
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
  distinct: z.array(ProgramAdminScalarFieldEnumSchema).optional(),
});
