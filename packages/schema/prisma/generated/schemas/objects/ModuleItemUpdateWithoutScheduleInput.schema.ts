import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './ModuleUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ModuleItemUpdateManyWithoutParent_itemNestedInputObjectSchema } from './ModuleItemUpdateManyWithoutParent_itemNestedInput.schema';
import { ModuleItemUpdateOneWithoutChildrenNestedInputObjectSchema } from './ModuleItemUpdateOneWithoutChildrenNestedInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ModuleItemAttachmentUpdateManyWithoutModule_itemNestedInputObjectSchema } from './ModuleItemAttachmentUpdateManyWithoutModule_itemNestedInput.schema';
import { ModuleItemStatusUpdateManyWithoutModule_itemNestedInputObjectSchema } from './ModuleItemStatusUpdateManyWithoutModule_itemNestedInput.schema';
import { ModuleItemQuestionUpdateManyWithoutModule_itemNestedInputObjectSchema } from './ModuleItemQuestionUpdateManyWithoutModule_itemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateWithoutScheduleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    module: z
      .lazy(() => ModuleUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => ModuleItemUpdateManyWithoutParent_itemNestedInputObjectSchema)
      .optional(),
    parent_item: z
      .lazy(() => ModuleItemUpdateOneWithoutChildrenNestedInputObjectSchema)
      .optional(),
    is_root: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    text: z
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
    is_quiz: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mandatory: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cover_img_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    attachments: z
      .lazy(
        () =>
          ModuleItemAttachmentUpdateManyWithoutModule_itemNestedInputObjectSchema,
      )
      .optional(),
    user_status: z
      .lazy(
        () =>
          ModuleItemStatusUpdateManyWithoutModule_itemNestedInputObjectSchema,
      )
      .optional(),
    quiz: z
      .lazy(
        () =>
          ModuleItemQuestionUpdateManyWithoutModule_itemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemUpdateWithoutScheduleInputObjectSchema = Schema;
