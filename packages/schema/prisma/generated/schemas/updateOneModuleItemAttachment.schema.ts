import { z } from 'zod';
import { ModuleItemAttachmentSelectObjectSchema } from './objects/ModuleItemAttachmentSelect.schema';
import { ModuleItemAttachmentIncludeObjectSchema } from './objects/ModuleItemAttachmentInclude.schema';
import { ModuleItemAttachmentUpdateInputObjectSchema } from './objects/ModuleItemAttachmentUpdateInput.schema';
import { ModuleItemAttachmentUncheckedUpdateInputObjectSchema } from './objects/ModuleItemAttachmentUncheckedUpdateInput.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentWhereUniqueInput.schema';

export const ModuleItemAttachmentUpdateOneSchema = z.object({
  select: ModuleItemAttachmentSelectObjectSchema.optional(),
  include: ModuleItemAttachmentIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemAttachmentUpdateInputObjectSchema,
    ModuleItemAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleItemAttachmentWhereUniqueInputObjectSchema,
});
