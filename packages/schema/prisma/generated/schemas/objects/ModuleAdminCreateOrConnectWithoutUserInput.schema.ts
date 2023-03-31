import { z } from 'zod';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminCreateWithoutUserInputObjectSchema } from './ModuleAdminCreateWithoutUserInput.schema';
import { ModuleAdminUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ModuleAdminCreateWithoutUserInputObjectSchema),
      z.lazy(() => ModuleAdminUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ModuleAdminCreateOrConnectWithoutUserInputObjectSchema = Schema;
