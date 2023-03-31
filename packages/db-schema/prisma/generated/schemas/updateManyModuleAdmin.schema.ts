import { z } from 'zod';
import { ModuleAdminUpdateManyMutationInputObjectSchema } from './objects/ModuleAdminUpdateManyMutationInput.schema';
import { ModuleAdminWhereInputObjectSchema } from './objects/ModuleAdminWhereInput.schema';

export const ModuleAdminUpdateManySchema = z.object({
  data: ModuleAdminUpdateManyMutationInputObjectSchema,
  where: ModuleAdminWhereInputObjectSchema.optional(),
});
