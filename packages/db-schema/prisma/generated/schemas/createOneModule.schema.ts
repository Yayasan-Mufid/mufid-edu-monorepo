import { z } from 'zod';
import { ModuleSelectObjectSchema } from './objects/ModuleSelect.schema';
import { ModuleIncludeObjectSchema } from './objects/ModuleInclude.schema';
import { ModuleCreateInputObjectSchema } from './objects/ModuleCreateInput.schema';
import { ModuleUncheckedCreateInputObjectSchema } from './objects/ModuleUncheckedCreateInput.schema';

export const ModuleCreateOneSchema = z.object({
  select: ModuleSelectObjectSchema.optional(),
  include: ModuleIncludeObjectSchema.optional(),
  data: z.union([
    ModuleCreateInputObjectSchema,
    ModuleUncheckedCreateInputObjectSchema,
  ]),
});
