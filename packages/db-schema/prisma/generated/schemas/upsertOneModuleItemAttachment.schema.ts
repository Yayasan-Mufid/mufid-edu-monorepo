import { z } from 'zod';
import { ModuleItemAttachmentSelectObjectSchema } from './objects/ModuleItemAttachmentSelect.schema';
import { ModuleItemAttachmentIncludeObjectSchema } from './objects/ModuleItemAttachmentInclude.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentCreateInputObjectSchema } from './objects/ModuleItemAttachmentCreateInput.schema';
import { ModuleItemAttachmentUncheckedCreateInputObjectSchema } from './objects/ModuleItemAttachmentUncheckedCreateInput.schema';
import { ModuleItemAttachmentUpdateInputObjectSchema } from './objects/ModuleItemAttachmentUpdateInput.schema';
import { ModuleItemAttachmentUncheckedUpdateInputObjectSchema } from './objects/ModuleItemAttachmentUncheckedUpdateInput.schema';

export const ModuleItemAttachmentUpsertSchema = z.object({
  select: ModuleItemAttachmentSelectObjectSchema.optional(),
  include: ModuleItemAttachmentIncludeObjectSchema.optional(),
  where: ModuleItemAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleItemAttachmentCreateInputObjectSchema,
    ModuleItemAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleItemAttachmentUpdateInputObjectSchema,
    ModuleItemAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
