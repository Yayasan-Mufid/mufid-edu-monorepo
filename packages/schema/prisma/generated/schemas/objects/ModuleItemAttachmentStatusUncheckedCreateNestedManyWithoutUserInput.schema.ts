import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusCreateOrConnectWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateOrConnectWithoutUserInput.schema';
import { ModuleItemAttachmentStatusCreateManyUserInputEnvelopeObjectSchema } from './ModuleItemAttachmentStatusCreateManyUserInputEnvelope.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusCreateManyUserInputEnvelopeObjectSchema,
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

export const ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
