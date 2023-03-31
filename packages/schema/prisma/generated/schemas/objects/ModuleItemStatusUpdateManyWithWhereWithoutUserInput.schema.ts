import { z } from 'zod';
import { ModuleItemStatusScalarWhereInputObjectSchema } from './ModuleItemStatusScalarWhereInput.schema';
import { ModuleItemStatusUpdateManyMutationInputObjectSchema } from './ModuleItemStatusUpdateManyMutationInput.schema';
import { ModuleItemStatusUncheckedUpdateManyWithoutModule_item_statusInputObjectSchema } from './ModuleItemStatusUncheckedUpdateManyWithoutModule_item_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemStatusUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemStatusUncheckedUpdateManyWithoutModule_item_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
