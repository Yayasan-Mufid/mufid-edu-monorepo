import { z } from 'zod';
import { ProgramAdminSelectObjectSchema } from './objects/ProgramAdminSelect.schema';
import { ProgramAdminIncludeObjectSchema } from './objects/ProgramAdminInclude.schema';
import { ProgramAdminWhereUniqueInputObjectSchema } from './objects/ProgramAdminWhereUniqueInput.schema';
import { ProgramAdminCreateInputObjectSchema } from './objects/ProgramAdminCreateInput.schema';
import { ProgramAdminUncheckedCreateInputObjectSchema } from './objects/ProgramAdminUncheckedCreateInput.schema';
import { ProgramAdminUpdateInputObjectSchema } from './objects/ProgramAdminUpdateInput.schema';
import { ProgramAdminUncheckedUpdateInputObjectSchema } from './objects/ProgramAdminUncheckedUpdateInput.schema';

export const ProgramAdminUpsertSchema = z.object({
  select: ProgramAdminSelectObjectSchema.optional(),
  include: ProgramAdminIncludeObjectSchema.optional(),
  where: ProgramAdminWhereUniqueInputObjectSchema,
  create: z.union([
    ProgramAdminCreateInputObjectSchema,
    ProgramAdminUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProgramAdminUpdateInputObjectSchema,
    ProgramAdminUncheckedUpdateInputObjectSchema,
  ]),
});
