import { z } from 'zod';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusUpdateWithoutUserInputObjectSchema } from './ModuleItemStatusUpdateWithoutUserInput.schema';
import { ModuleItemStatusUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedUpdateWithoutUserInput.schema';
import { ModuleItemStatusCreateWithoutUserInputObjectSchema } from './ModuleItemStatusCreateWithoutUserInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleItemStatusUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ModuleItemStatusUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ModuleItemStatusCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ModuleItemStatusUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
