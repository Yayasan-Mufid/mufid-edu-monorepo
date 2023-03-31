import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUser_idProgram_idCompoundUniqueInput> =
  z
    .object({
      user_id: z.string(),
      program_id: z.string(),
    })
    .strict();

export const ProgramAdminUser_idProgram_idCompoundUniqueInputObjectSchema =
  Schema;
