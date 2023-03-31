import { z } from 'zod';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateOrConnectWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentCreateOrConnectWithoutModule_itemInputObjectSchema =
  Schema;
