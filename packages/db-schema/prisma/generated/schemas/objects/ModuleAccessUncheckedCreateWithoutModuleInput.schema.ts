import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUncheckedCreateWithoutModuleInput> =
  z
    .object({
      id: z.string().optional(),
      user_id: z.string(),
      granted_on: z.date().optional(),
    })
    .strict();

export const ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema = Schema;
