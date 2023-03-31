import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusCreateOrConnectWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateOrConnectWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutUserInput.schema';
import { ModuleItemAttachmentStatusCreateManyUserInputEnvelopeObjectSchema } from './ModuleItemAttachmentStatusCreateManyUserInputEnvelope.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUpdateManyWithWhereWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUpdateManyWithWhereWithoutUserInput.schema';
import { ModuleItemAttachmentStatusScalarWhereInputObjectSchema } from './ModuleItemAttachmentStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusCreateManyUserInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentStatusScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
