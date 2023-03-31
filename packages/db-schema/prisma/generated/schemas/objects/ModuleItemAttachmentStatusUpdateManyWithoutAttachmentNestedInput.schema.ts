import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelopeObjectSchema } from './ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelope.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUpdateManyWithWhereWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUpdateManyWithWhereWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusScalarWhereInputObjectSchema } from './ModuleItemAttachmentStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateManyWithoutAttachmentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutAttachmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutAttachmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelopeObjectSchema,
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
              ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutAttachmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutAttachmentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemAttachmentStatusUpdateManyWithWhereWithoutAttachmentInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemAttachmentStatusUpdateManyWithWhereWithoutAttachmentInputObjectSchema,
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

export const ModuleItemAttachmentStatusUpdateManyWithoutAttachmentNestedInputObjectSchema =
  Schema;
