import { z } from 'zod';
import { ProgramAdminWhereInputObjectSchema } from './objects/ProgramAdminWhereInput.schema';

export const ProgramAdminDeleteManySchema = z.object({
  where: ProgramAdminWhereInputObjectSchema.optional(),
});
