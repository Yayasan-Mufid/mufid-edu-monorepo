import { z } from 'zod';
import { ModuleItemAttachmentCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutModule_itemInput.schema';
import { ModuleItemAttachmentCreateOrConnectWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentCreateOrConnectWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUpsertWithWhereUniqueWithoutModule_itemInput.schema';
import { ModuleItemAttachmentCreateManyModule_itemInputEnvelopeObjectSchema } from './ModuleItemAttachmentCreateManyModule_itemInputEnvelope.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUpdateWithWhereUniqueWithoutModule_itemInput.schema';
import { ModuleItemAttachmentUpdateManyWithWhereWithoutModule_itemInputObjectSchema } from './ModuleItemAttachmentUpdateManyWithWhereWithoutModule_itemInput.schema';
import { ModuleItemAttachmentScalarWhereInputObjectSchema } from './ModuleItemAttachmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUncheckedUpdateManyWithoutModule_itemNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleItemAttachmentScalarWhereInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema =
  Schema;
