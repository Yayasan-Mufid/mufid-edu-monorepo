import { z } from 'zod';
import { ModuleItemAttachmentStatusSelectObjectSchema } from './objects/ModuleItemAttachmentStatusSelect.schema';
import { ModuleItemAttachmentStatusIncludeObjectSchema } from './objects/ModuleItemAttachmentStatusInclude.schema';
import { ModuleItemAttachmentStatusUpdateInputObjectSchema } from './objects/ModuleItemAttachmentStatusUpdateInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateInputObjectSchema } from './objects/ModuleItemAttachmentStatusUncheckedUpdateInput.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereUniqueInput.schema';

export const ModuleItemAttachmentStatusUpdateOneSchema = z.object({
  select: ModuleItemAttachmentStatusSelectObjectSchema.optional(),
  include: ModuleItemAttachmentStatusIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemAttachmentStatusUpdateInputObjectSchema,
    ModuleItemAttachmentStatusUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
});
