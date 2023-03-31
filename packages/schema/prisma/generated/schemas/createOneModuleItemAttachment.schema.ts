import { z } from 'zod';
import { ModuleItemAttachmentSelectObjectSchema } from './objects/ModuleItemAttachmentSelect.schema';
import { ModuleItemAttachmentIncludeObjectSchema } from './objects/ModuleItemAttachmentInclude.schema';
import { ModuleItemAttachmentCreateInputObjectSchema } from './objects/ModuleItemAttachmentCreateInput.schema';
import { ModuleItemAttachmentUncheckedCreateInputObjectSchema } from './objects/ModuleItemAttachmentUncheckedCreateInput.schema';

export const ModuleItemAttachmentCreateOneSchema = z.object({
  select: ModuleItemAttachmentSelectObjectSchema.optional(),
  include: ModuleItemAttachmentIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemAttachmentCreateInputObjectSchema,
    ModuleItemAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
