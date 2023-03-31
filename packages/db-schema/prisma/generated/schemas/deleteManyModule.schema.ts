import { z } from 'zod';
import { ModuleWhereInputObjectSchema } from './objects/ModuleWhereInput.schema';

export const ModuleDeleteManySchema = z.object({
  where: ModuleWhereInputObjectSchema.optional(),
});
