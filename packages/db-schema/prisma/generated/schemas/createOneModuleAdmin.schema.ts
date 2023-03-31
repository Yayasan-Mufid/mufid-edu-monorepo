import { z } from 'zod';
import { ModuleAdminSelectObjectSchema } from './objects/ModuleAdminSelect.schema';
import { ModuleAdminIncludeObjectSchema } from './objects/ModuleAdminInclude.schema';
import { ModuleAdminCreateInputObjectSchema } from './objects/ModuleAdminCreateInput.schema';
import { ModuleAdminUncheckedCreateInputObjectSchema } from './objects/ModuleAdminUncheckedCreateInput.schema';

export const ModuleAdminCreateOneSchema = z.object({
  select: ModuleAdminSelectObjectSchema.optional(),
  include: ModuleAdminIncludeObjectSchema.optional(),
  data: z.union([
    ModuleAdminCreateInputObjectSchema,
    ModuleAdminUncheckedCreateInputObjectSchema,
  ]),
});
