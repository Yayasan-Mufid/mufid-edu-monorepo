import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessModule_idUser_idCompoundUniqueInput> =
  z
    .object({
      module_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const ModuleAccessModule_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
