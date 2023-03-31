import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusAttachment_idUser_idCompoundUniqueInput> =
  z
    .object({
      attachment_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const ModuleItemAttachmentStatusAttachment_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
