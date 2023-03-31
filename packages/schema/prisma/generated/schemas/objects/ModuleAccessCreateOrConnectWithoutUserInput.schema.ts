import { z } from 'zod';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessCreateWithoutUserInputObjectSchema } from './ModuleAccessCreateWithoutUserInput.schema';
import { ModuleAccessUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleAccessCreateWithoutUserInputObjectSchema),
      z.lazy(() => ModuleAccessUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleAccessCreateOrConnectWithoutUserInputObjectSchema = Schema;
