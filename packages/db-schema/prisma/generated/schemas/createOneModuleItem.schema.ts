import { z } from 'zod';
import { ModuleItemSelectObjectSchema } from './objects/ModuleItemSelect.schema';
import { ModuleItemIncludeObjectSchema } from './objects/ModuleItemInclude.schema';
import { ModuleItemCreateInputObjectSchema } from './objects/ModuleItemCreateInput.schema';
import { ModuleItemUncheckedCreateInputObjectSchema } from './objects/ModuleItemUncheckedCreateInput.schema';

export const ModuleItemCreateOneSchema = z.object({
  select: ModuleItemSelectObjectSchema.optional(),
  include: ModuleItemIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemCreateInputObjectSchema,
    ModuleItemUncheckedCreateInputObjectSchema,
  ]),
});
