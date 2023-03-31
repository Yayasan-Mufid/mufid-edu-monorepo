import { z } from 'zod';
import { ProgramAdminSelectObjectSchema } from './objects/ProgramAdminSelect.schema';
import { ProgramAdminIncludeObjectSchema } from './objects/ProgramAdminInclude.schema';
import { ProgramAdminCreateInputObjectSchema } from './objects/ProgramAdminCreateInput.schema';
import { ProgramAdminUncheckedCreateInputObjectSchema } from './objects/ProgramAdminUncheckedCreateInput.schema';

export const ProgramAdminCreateOneSchema = z.object({
  select: ProgramAdminSelectObjectSchema.optional(),
  include: ProgramAdminIncludeObjectSchema.optional(),
  data: z.union([
    ProgramAdminCreateInputObjectSchema,
    ProgramAdminUncheckedCreateInputObjectSchema,
  ]),
});
