import { z } from 'zod';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusUpdateWithoutUserInputObjectSchema } from './ModuleItemStatusUpdateWithoutUserInput.schema';
import { ModuleItemStatusUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemStatusUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ModuleItemStatusUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
