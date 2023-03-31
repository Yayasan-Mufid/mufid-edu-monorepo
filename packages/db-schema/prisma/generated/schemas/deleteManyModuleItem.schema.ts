import { z } from 'zod';
import { ModuleItemWhereInputObjectSchema } from './objects/ModuleItemWhereInput.schema';

export const ModuleItemDeleteManySchema = z.object({
  where: ModuleItemWhereInputObjectSchema.optional(),
});
