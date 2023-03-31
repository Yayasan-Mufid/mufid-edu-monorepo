import { z } from 'zod';
import { ModuleAccessSelectObjectSchema } from './objects/ModuleAccessSelect.schema';
import { ModuleAccessIncludeObjectSchema } from './objects/ModuleAccessInclude.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './objects/ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessCreateInputObjectSchema } from './objects/ModuleAccessCreateInput.schema';
import { ModuleAccessUncheckedCreateInputObjectSchema } from './objects/ModuleAccessUncheckedCreateInput.schema';
import { ModuleAccessUpdateInputObjectSchema } from './objects/ModuleAccessUpdateInput.schema';
import { ModuleAccessUncheckedUpdateInputObjectSchema } from './objects/ModuleAccessUncheckedUpdateInput.schema';

export const ModuleAccessUpsertSchema = z.object({
  select: ModuleAccessSelectObjectSchema.optional(),
  include: ModuleAccessIncludeObjectSchema.optional(),
  where: ModuleAccessWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleAccessCreateInputObjectSchema,
    ModuleAccessUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleAccessUpdateInputObjectSchema,
    ModuleAccessUncheckedUpdateInputObjectSchema,
  ]),
});
