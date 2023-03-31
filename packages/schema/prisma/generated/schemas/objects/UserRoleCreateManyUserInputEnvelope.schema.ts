import { z } from 'zod';
import { UserRoleCreateManyUserInputObjectSchema } from './UserRoleCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => UserRoleCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserRoleCreateManyUserInputEnvelopeObjectSchema = Schema;
