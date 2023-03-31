import { z } from 'zod';
import { ModuleItemStatusScalarWhereInputObjectSchema } from './ModuleItemStatusScalarWhereInput.schema';
import { ModuleItemStatusUpdateManyMutationInputObjectSchema } from './ModuleItemStatusUpdateManyMutationInput.schema';
import { ModuleItemStatusUncheckedUpdateManyWithoutUser_statusInputObjectSchema } from './ModuleItemStatusUncheckedUpdateManyWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateManyWithWhereWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemStatusUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemStatusUncheckedUpdateManyWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusUpdateManyWithWhereWithoutModule_itemInputObjectSchema =
  Schema;
