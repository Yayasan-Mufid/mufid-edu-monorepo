import { z } from 'zod';
import { ModuleItemAttachmentStatusSelectObjectSchema } from './objects/ModuleItemAttachmentStatusSelect.schema';
import { ModuleItemAttachmentStatusIncludeObjectSchema } from './objects/ModuleItemAttachmentStatusInclude.schema';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusCreateInputObjectSchema } from './objects/ModuleItemAttachmentStatusCreateInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateInputObjectSchema } from './objects/ModuleItemAttachmentStatusUncheckedCreateInput.schema';
import { ModuleItemAttachmentStatusUpdateInputObjectSchema } from './objects/ModuleItemAttachmentStatusUpdateInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateInputObjectSchema } from './objects/ModuleItemAttachmentStatusUncheckedUpdateInput.schema';

export const ModuleItemAttachmentStatusUpsertSchema = z.object({
  select: ModuleItemAttachmentStatusSelectObjectSchema.optional(),
  include: ModuleItemAttachmentStatusIncludeObjectSchema.optional(),
  where: ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleItemAttachmentStatusCreateInputObjectSchema,
    ModuleItemAttachmentStatusUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleItemAttachmentStatusUpdateInputObjectSchema,
    ModuleItemAttachmentStatusUncheckedUpdateInputObjectSchema,
  ]),
});
