import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleItemUncheckedUpdateManyWithoutParent_itemNestedInputObjectSchema } from './ModuleItemUncheckedUpdateManyWithoutParent_itemNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ModuleItemAttachmentUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema } from './ModuleItemAttachmentUncheckedUpdateManyWithoutModule_itemNestedInput.schema';
import { StudyGroupScheduleUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateManyWithoutModule_itemNestedInput.schema';
import { ModuleItemQuestionUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateManyWithoutModule_itemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUncheckedUpdateWithoutUser_statusInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      module_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      children: z
        .lazy(
          () =>
            ModuleItemUncheckedUpdateManyWithoutParent_itemNestedInputObjectSchema,
        )
        .optional(),
      parent_item_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
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
            ModuleItemAttachmentUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema,
        )
        .optional(),
      schedule: z
        .lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema,
        )
        .optional(),
      quiz: z
        .lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemUncheckedUpdateWithoutUser_statusInputObjectSchema =
  Schema;
