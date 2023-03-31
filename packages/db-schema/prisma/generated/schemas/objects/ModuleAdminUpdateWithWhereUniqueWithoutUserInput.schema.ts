import { z } from 'zod';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminUpdateWithoutUserInputObjectSchema } from './ModuleAdminUpdateWithoutUserInput.schema';
import { ModuleAdminUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleAdminUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAdminUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAdminUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
