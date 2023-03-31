import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelopeObjectSchema } from './ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelope.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInput> =
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
      createMany: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusCreateManyAttachmentInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutAttachmentInputObjectSchema =
  Schema;
