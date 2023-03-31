import { z } from 'zod';
import { ModuleUpdateManyMutationInputObjectSchema } from './objects/ModuleUpdateManyMutationInput.schema';
import { ModuleWhereInputObjectSchema } from './objects/ModuleWhereInput.schema';

export const ModuleUpdateManySchema = z.object({
  data: ModuleUpdateManyMutationInputObjectSchema,
  where: ModuleWhereInputObjectSchema.optional(),
});
