import { z } from 'zod';
import { ProgramAdminUpdateManyMutationInputObjectSchema } from './objects/ProgramAdminUpdateManyMutationInput.schema';
import { ProgramAdminWhereInputObjectSchema } from './objects/ProgramAdminWhereInput.schema';

export const ProgramAdminUpdateManySchema = z.object({
  data: ProgramAdminUpdateManyMutationInputObjectSchema,
  where: ProgramAdminWhereInputObjectSchema.optional(),
});
