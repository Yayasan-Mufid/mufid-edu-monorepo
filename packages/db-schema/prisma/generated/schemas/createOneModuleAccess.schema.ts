import { z } from 'zod';
import { ModuleAccessSelectObjectSchema } from './objects/ModuleAccessSelect.schema';
import { ModuleAccessIncludeObjectSchema } from './objects/ModuleAccessInclude.schema';
import { ModuleAccessCreateInputObjectSchema } from './objects/ModuleAccessCreateInput.schema';
import { ModuleAccessUncheckedCreateInputObjectSchema } from './objects/ModuleAccessUncheckedCreateInput.schema';

export const ModuleAccessCreateOneSchema = z.object({
  select: ModuleAccessSelectObjectSchema.optional(),
  include: ModuleAccessIncludeObjectSchema.optional(),
  data: z.union([
    ModuleAccessCreateInputObjectSchema,
    ModuleAccessUncheckedCreateInputObjectSchema,
  ]),
});
