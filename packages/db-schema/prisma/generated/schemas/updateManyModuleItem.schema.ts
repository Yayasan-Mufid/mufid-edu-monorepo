import { z } from 'zod';
import { ModuleItemUpdateManyMutationInputObjectSchema } from './objects/ModuleItemUpdateManyMutationInput.schema';
import { ModuleItemWhereInputObjectSchema } from './objects/ModuleItemWhereInput.schema';

export const ModuleItemUpdateManySchema = z.object({
  data: ModuleItemUpdateManyMutationInputObjectSchema,
  where: ModuleItemWhereInputObjectSchema.optional(),
});
