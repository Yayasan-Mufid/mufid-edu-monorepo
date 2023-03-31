import { z } from 'zod';
import { ModuleAccessWhereInputObjectSchema } from './objects/ModuleAccessWhereInput.schema';

export const ModuleAccessDeleteManySchema = z.object({
  where: ModuleAccessWhereInputObjectSchema.optional(),
});
