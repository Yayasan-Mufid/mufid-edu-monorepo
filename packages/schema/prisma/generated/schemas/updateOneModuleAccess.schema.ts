import { z } from 'zod';
import { ModuleAccessSelectObjectSchema } from './objects/ModuleAccessSelect.schema';
import { ModuleAccessIncludeObjectSchema } from './objects/ModuleAccessInclude.schema';
import { ModuleAccessUpdateInputObjectSchema } from './objects/ModuleAccessUpdateInput.schema';
import { ModuleAccessUncheckedUpdateInputObjectSchema } from './objects/ModuleAccessUncheckedUpdateInput.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './objects/ModuleAccessWhereUniqueInput.schema';

export const ModuleAccessUpdateOneSchema = z.object({
  select: ModuleAccessSelectObjectSchema.optional(),
  include: ModuleAccessIncludeObjectSchema.optional(),
  data: z.union([
    ModuleAccessUpdateInputObjectSchema,
    ModuleAccessUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleAccessWhereUniqueInputObjectSchema,
});
