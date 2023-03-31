import { z } from 'zod';
import { ModuleItemStatusSelectObjectSchema } from './objects/ModuleItemStatusSelect.schema';
import { ModuleItemStatusIncludeObjectSchema } from './objects/ModuleItemStatusInclude.schema';
import { ModuleItemStatusCreateInputObjectSchema } from './objects/ModuleItemStatusCreateInput.schema';
import { ModuleItemStatusUncheckedCreateInputObjectSchema } from './objects/ModuleItemStatusUncheckedCreateInput.schema';

export const ModuleItemStatusCreateOneSchema = z.object({
  select: ModuleItemStatusSelectObjectSchema.optional(),
  include: ModuleItemStatusIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemStatusCreateInputObjectSchema,
    ModuleItemStatusUncheckedCreateInputObjectSchema,
  ]),
});
