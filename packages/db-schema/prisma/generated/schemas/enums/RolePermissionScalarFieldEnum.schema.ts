import { z } from 'zod';

export const RolePermissionScalarFieldEnumSchema = z.enum([
  'id',
  'role_name',
  'permission_name',
]);
