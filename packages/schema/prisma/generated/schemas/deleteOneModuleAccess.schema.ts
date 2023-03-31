import { z } from 'zod';
import { ModuleAccessSelectObjectSchema } from './objects/ModuleAccessSelect.schema';
import { ModuleAccessIncludeObjectSchema } from './objects/ModuleAccessInclude.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './objects/ModuleAccessWhereUniqueInput.schema';

export const ModuleAccessDeleteOneSchema = z.object({
  select: ModuleAccessSelectObjectSchema.optional(),
  include: ModuleAccessIncludeObjectSchema.optional(),
  where: ModuleAccessWhereUniqueInputObjectSchema,
});
