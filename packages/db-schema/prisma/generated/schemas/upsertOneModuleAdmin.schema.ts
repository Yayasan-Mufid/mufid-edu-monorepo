import { z } from 'zod';
import { ModuleAdminSelectObjectSchema } from './objects/ModuleAdminSelect.schema';
import { ModuleAdminIncludeObjectSchema } from './objects/ModuleAdminInclude.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './objects/ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminCreateInputObjectSchema } from './objects/ModuleAdminCreateInput.schema';
import { ModuleAdminUncheckedCreateInputObjectSchema } from './objects/ModuleAdminUncheckedCreateInput.schema';
import { ModuleAdminUpdateInputObjectSchema } from './objects/ModuleAdminUpdateInput.schema';
import { ModuleAdminUncheckedUpdateInputObjectSchema } from './objects/ModuleAdminUncheckedUpdateInput.schema';

export const ModuleAdminUpsertSchema = z.object({
  select: ModuleAdminSelectObjectSchema.optional(),
  include: ModuleAdminIncludeObjectSchema.optional(),
  where: ModuleAdminWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleAdminCreateInputObjectSchema,
    ModuleAdminUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleAdminUpdateInputObjectSchema,
    ModuleAdminUncheckedUpdateInputObjectSchema,
  ]),
});
