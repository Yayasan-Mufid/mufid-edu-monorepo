import { z } from 'zod';
import { ModuleItemAttachmentStatusSelectObjectSchema } from './objects/ModuleItemAttachmentStatusSelect.schema';
import { ModuleItemAttachmentStatusIncludeObjectSchema } from './objects/ModuleItemAttachmentStatusInclude.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereUniqueInput.schema';

export const ModuleItemAttachmentStatusDeleteOneSchema = z.object({
  select: ModuleItemAttachmentStatusSelectObjectSchema.optional(),
  include: ModuleItemAttachmentStatusIncludeObjectSchema.optional(),
  where: ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
});
