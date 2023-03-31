import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminModule_idUser_idCompoundUniqueInput> =
  z
    .object({
      module_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const ModuleAdminModule_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
