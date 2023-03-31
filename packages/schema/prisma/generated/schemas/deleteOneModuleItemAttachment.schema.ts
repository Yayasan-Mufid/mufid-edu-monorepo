import { z } from 'zod';
import { ModuleItemAttachmentSelectObjectSchema } from './objects/ModuleItemAttachmentSelect.schema';
import { ModuleItemAttachmentIncludeObjectSchema } from './objects/ModuleItemAttachmentInclude.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentWhereUniqueInput.schema';

export const ModuleItemAttachmentDeleteOneSchema = z.object({
  select: ModuleItemAttachmentSelectObjectSchema.optional(),
  include: ModuleItemAttachmentIncludeObjectSchema.optional(),
  where: ModuleItemAttachmentWhereUniqueInputObjectSchema,
});
