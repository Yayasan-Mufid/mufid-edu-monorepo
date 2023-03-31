import { z } from 'zod';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateOrConnectWithoutUser_statusInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentCreateOrConnectWithoutUser_statusInputObjectSchema =
  Schema;
