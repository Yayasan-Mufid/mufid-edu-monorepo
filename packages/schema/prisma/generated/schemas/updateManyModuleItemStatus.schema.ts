import { z } from 'zod';
import { ModuleItemStatusUpdateManyMutationInputObjectSchema } from './objects/ModuleItemStatusUpdateManyMutationInput.schema';
import { ModuleItemStatusWhereInputObjectSchema } from './objects/ModuleItemStatusWhereInput.schema';

export const ModuleItemStatusUpdateManySchema = z.object({
  data: ModuleItemStatusUpdateManyMutationInputObjectSchema,
  where: ModuleItemStatusWhereInputObjectSchema.optional(),
});
