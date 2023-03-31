import { z } from 'zod';
import { ModuleItemAttachmentUpdateManyMutationInputObjectSchema } from './objects/ModuleItemAttachmentUpdateManyMutationInput.schema';
import { ModuleItemAttachmentWhereInputObjectSchema } from './objects/ModuleItemAttachmentWhereInput.schema';

export const ModuleItemAttachmentUpdateManySchema = z.object({
  data: ModuleItemAttachmentUpdateManyMutationInputObjectSchema,
  where: ModuleItemAttachmentWhereInputObjectSchema.optional(),
});
