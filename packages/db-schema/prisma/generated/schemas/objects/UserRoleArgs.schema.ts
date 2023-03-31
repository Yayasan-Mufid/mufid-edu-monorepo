import { z } from 'zod';
import { UserRoleSelectObjectSchema } from './UserRoleSelect.schema';
import { UserRoleIncludeObjectSchema } from './UserRoleInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleArgs> = z
  .object({
    select: z.lazy(() => UserRoleSelectObjectSchema).optional(),
    include: z.lazy(() => UserRoleIncludeObjectSchema).optional(),
  })
  .strict();

export const UserRoleArgsObjectSchema = Schema;
