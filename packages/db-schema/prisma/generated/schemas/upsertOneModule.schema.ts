import { z } from 'zod';
import { ModuleSelectObjectSchema } from './objects/ModuleSelect.schema';
import { ModuleIncludeObjectSchema } from './objects/ModuleInclude.schema';
import { ModuleWhereUniqueInputObjectSchema } from './objects/ModuleWhereUniqueInput.schema';
import { ModuleCreateInputObjectSchema } from './objects/ModuleCreateInput.schema';
import { ModuleUncheckedCreateInputObjectSchema } from './objects/ModuleUncheckedCreateInput.schema';
import { ModuleUpdateInputObjectSchema } from './objects/ModuleUpdateInput.schema';
import { ModuleUncheckedUpdateInputObjectSchema } from './objects/ModuleUncheckedUpdateInput.schema';

export const ModuleUpsertSchema = z.object({
  select: ModuleSelectObjectSchema.optional(),
  include: ModuleIncludeObjectSchema.optional(),
  where: ModuleWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleCreateInputObjectSchema,
    ModuleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleUpdateInputObjectSchema,
    ModuleUncheckedUpdateInputObjectSchema,
  ]),
});
