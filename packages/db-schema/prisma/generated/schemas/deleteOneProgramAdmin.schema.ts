import { z } from 'zod';
import { ProgramAdminSelectObjectSchema } from './objects/ProgramAdminSelect.schema';
import { ProgramAdminIncludeObjectSchema } from './objects/ProgramAdminInclude.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './objects/ProgramAdminWhereUniqueInput.schema';

export const ProgramAdminDeleteOneSchema = z.object({
  select: ProgramAdminSelectObjectSchema.optional(),
  include: ProgramAdminIncludeObjectSchema.optional(),
  where: ProgramAdminWhereUniqueInputObjectSchema,
});
