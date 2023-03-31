import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleItemUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutAttachmentsNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ModuleItemAttachmentStatusUpdateManyWithoutAttachmentNestedInputObjectSchema } from './ModuleItemAttachmentStatusUpdateManyWithoutAttachmentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    module_item: z
      .lazy(
        () =>
          ModuleItemUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema,
      )
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    seq: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mandatory: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user_status: z
      .lazy(
        () =>
          ModuleItemAttachmentStatusUpdateManyWithoutAttachmentNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentUpdateInputObjectSchema = Schema;
