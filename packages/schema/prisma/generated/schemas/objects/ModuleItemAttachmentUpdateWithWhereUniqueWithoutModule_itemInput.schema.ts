import { z } from 'zod';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUpdateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUncheckedUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedUpdateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUpdateWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ModuleItemAttachmentUpdateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
