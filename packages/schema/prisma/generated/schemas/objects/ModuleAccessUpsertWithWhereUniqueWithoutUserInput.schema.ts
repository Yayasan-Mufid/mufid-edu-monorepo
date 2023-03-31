import { z } from 'zod';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessUpdateWithoutUserInputObjectSchema } from './ModuleAccessUpdateWithoutUserInput.schema';
import { ModuleAccessUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleAccessUncheckedUpdateWithoutUserInput.schema';
import { ModuleAccessCreateWithoutUserInputObjectSchema } from './ModuleAccessCreateWithoutUserInput.schema';
import { ModuleAccessUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleAccessUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ModuleAccessCreateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAccessUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
