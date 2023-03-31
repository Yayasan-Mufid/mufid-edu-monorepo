import { z } from 'zod';
import { ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentCreateOrConnectWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateOrConnectWithoutModule_itemInput.schema';
import { ModuleItemAttachmentCreateManyModule_itemInputEnvelopeObjectSchema } from './ModuleItemAttachmentCreateManyModule_itemInputEnvelope.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUncheckedCreateNestedManyWithoutModule_itemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentCreateOrConnectWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentCreateOrConnectWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ModuleItemAttachmentCreateManyModule_itemInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema =
  Schema;
