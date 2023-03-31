import { z } from 'zod';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminUpdateWithoutUserInputObjectSchema } from './ModuleAdminUpdateWithoutUserInput.schema';
import { ModuleAdminUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleAdminUncheckedUpdateWithoutUserInput.schema';
import { ModuleAdminCreateWithoutUserInputObjectSchema } from './ModuleAdminCreateWithoutUserInput.schema';
import { ModuleAdminUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleAdminUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAdminUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ModuleAdminCreateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAdminUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
