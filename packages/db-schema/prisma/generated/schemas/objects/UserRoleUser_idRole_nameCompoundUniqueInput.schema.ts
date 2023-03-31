import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUser_idRole_nameCompoundUniqueInput> = z
  .object({
    user_id: z.string(),
    role_name: z.string(),
  })
  .strict();

export const UserRoleUser_idRole_nameCompoundUniqueInputObjectSchema = Schema;
