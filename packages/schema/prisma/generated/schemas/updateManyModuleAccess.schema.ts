import { z } from 'zod';
import { ModuleAccessUpdateManyMutationInputObjectSchema } from './objects/ModuleAccessUpdateManyMutationInput.schema';
import { ModuleAccessWhereInputObjectSchema } from './objects/ModuleAccessWhereInput.schema';

export const ModuleAccessUpdateManySchema = z.object({
  data: ModuleAccessUpdateManyMutationInputObjectSchema,
  where: ModuleAccessWhereInputObjectSchema.optional(),
});
