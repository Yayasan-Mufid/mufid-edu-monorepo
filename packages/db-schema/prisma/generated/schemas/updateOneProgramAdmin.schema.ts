import { z } from 'zod';
import { ProgramAdminSelectObjectSchema } from './objects/ProgramAdminSelect.schema';
import { ProgramAdminIncludeObjectSchema } from './objects/ProgramAdminInclude.schema';
import { ProgramAdminUpdateInputObjectSchema } from './objects/ProgramAdminUpdateInput.schema';
import { ProgramAdminUncheckedUpdateInputObjectSchema } from './objects/ProgramAdminUncheckedUpdateInput.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './objects/ProgramAdminWhereUniqueInput.schema';

export const ProgramAdminUpdateOneSchema = z.object({
  select: ProgramAdminSelectObjectSchema.optional(),
  include: ProgramAdminIncludeObjectSchema.optional(),
  data: z.union([
    ProgramAdminUpdateInputObjectSchema,
    ProgramAdminUncheckedUpdateInputObjectSchema,
  ]),
  where: ProgramAdminWhereUniqueInputObjectSchema,
});
