import { z } from 'zod';
import { ModuleItemAttachmentStatusSelectObjectSchema } from './objects/ModuleItemAttachmentStatusSelect.schema';
import { ModuleItemAttachmentStatusIncludeObjectSchema } from './objects/ModuleItemAttachmentStatusInclude.schema';
import { ModuleItemAttachmentStatusCreateInputObjectSchema } from './objects/ModuleItemAttachmentStatusCreateInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateInputObjectSchema } from './objects/ModuleItemAttachmentStatusUncheckedCreateInput.schema';

export const ModuleItemAttachmentStatusCreateOneSchema = z.object({
  select: ModuleItemAttachmentStatusSelectObjectSchema.optional(),
  include: ModuleItemAttachmentStatusIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemAttachmentStatusCreateInputObjectSchema,
    ModuleItemAttachmentStatusUncheckedCreateInputObjectSchema,
  ]),
});
