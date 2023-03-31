import { z } from 'zod';
import { ModuleAdminCreateManyInputObjectSchema } from './objects/ModuleAdminCreateManyInput.schema';

export const ModuleAdminCreateManySchema = z.object({
  data: z.union([
    ModuleAdminCreateManyInputObjectSchema,
    z.array(ModuleAdminCreateManyInputObjectSchema),
  ]),
});
