import { z } from 'zod';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessUpdateWithoutUserInputObjectSchema } from './ModuleAccessUpdateWithoutUserInput.schema';
import { ModuleAccessUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleAccessUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAccessUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAccessUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ModuleAccessUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
