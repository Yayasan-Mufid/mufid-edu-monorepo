import { z } from 'zod';
import { ModuleAdminSelectObjectSchema } from './objects/ModuleAdminSelect.schema';
import { ModuleAdminIncludeObjectSchema } from './objects/ModuleAdminInclude.schema';
import { ModuleAdminUpdateInputObjectSchema } from './objects/ModuleAdminUpdateInput.schema';
import { ModuleAdminUncheckedUpdateInputObjectSchema } from './objects/ModuleAdminUncheckedUpdateInput.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './objects/ModuleAdminWhereUniqueInput.schema';

export const ModuleAdminUpdateOneSchema = z.object({
  select: ModuleAdminSelectObjectSchema.optional(),
  include: ModuleAdminIncludeObjectSchema.optional(),
  data: z.union([
    ModuleAdminUpdateInputObjectSchema,
    ModuleAdminUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleAdminWhereUniqueInputObjectSchema,
});
