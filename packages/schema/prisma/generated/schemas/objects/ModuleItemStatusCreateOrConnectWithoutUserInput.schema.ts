import { z } from 'zod';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusCreateWithoutUserInputObjectSchema } from './ModuleItemStatusCreateWithoutUserInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemStatusCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
