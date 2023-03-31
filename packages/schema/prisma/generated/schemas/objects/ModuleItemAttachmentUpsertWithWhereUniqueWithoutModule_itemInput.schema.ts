import { z } from 'zod';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUpdateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUncheckedUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedUpdateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUpsertWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ModuleItemAttachmentUpdateWithoutModule_itemInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
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

export const ModuleItemAttachmentUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
