import { z } from 'zod';
import { UserRoleCreateManyRoleInputObjectSchema } from './UserRoleCreateManyRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateManyRoleInputEnvelope> = z
  .object({
    data: z.lazy(() => UserRoleCreateManyRoleInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserRoleCreateManyRoleInputEnvelopeObjectSchema = Schema;
