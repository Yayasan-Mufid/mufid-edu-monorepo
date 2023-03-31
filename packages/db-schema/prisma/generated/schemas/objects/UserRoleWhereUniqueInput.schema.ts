import { z } from 'zod';
import { UserRoleUser_idRole_nameCompoundUniqueInputObjectSchema } from './UserRoleUser_idRole_nameCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    user_id_role_name: z
      .lazy(() => UserRoleUser_idRole_nameCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserRoleWhereUniqueInputObjectSchema = Schema;
