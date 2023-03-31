import { z } from 'zod';
import { ModuleSelectObjectSchema } from './objects/ModuleSelect.schema';
import { ModuleIncludeObjectSchema } from './objects/ModuleInclude.schema';
import { ModuleWhereUniqueInputObjectSchema } from './objects/ModuleWhereUniqueInput.schema';

export const ModuleDeleteOneSchema = z.object({
  select: ModuleSelectObjectSchema.optional(),
  include: ModuleIncludeObjectSchema.optional(),
  where: ModuleWhereUniqueInputObjectSchema,
});
