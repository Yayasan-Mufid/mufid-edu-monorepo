import { z } from 'zod';
import { ProgramAdminUser_idProgram_idCompoundUniqueInputObjectSchema } from './ProgramAdminUser_idProgram_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    user_id_program_id: z
      .lazy(() => ProgramAdminUser_idProgram_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProgramAdminWhereUniqueInputObjectSchema = Schema;
