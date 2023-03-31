import { z } from 'zod';
import { ModuleAdminWhereInputObjectSchema } from './objects/ModuleAdminWhereInput.schema';

export const ModuleAdminDeleteManySchema = z.object({
  where: ModuleAdminWhereInputObjectSchema.optional(),
});
