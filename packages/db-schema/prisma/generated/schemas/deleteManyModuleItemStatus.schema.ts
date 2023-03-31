import { z } from 'zod';
import { ModuleItemStatusWhereInputObjectSchema } from './objects/ModuleItemStatusWhereInput.schema';

export const ModuleItemStatusDeleteManySchema = z.object({
  where: ModuleItemStatusWhereInputObjectSchema.optional(),
});
