/*
  Warnings:

  - A unique constraint covering the columns `[module_id,user_id]` on the table `ModuleAccess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[module_id,user_id]` on the table `ModuleAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,program_id]` on the table `ProgramAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_name,permission_name]` on the table `RolePermission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,role_name]` on the table `UserRole` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ModuleAccess_module_id_user_id_key" ON "ModuleAccess"("module_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleAdmin_module_id_user_id_key" ON "ModuleAdmin"("module_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramAdmin_user_id_program_id_key" ON "ProgramAdmin"("user_id", "program_id");

-- CreateIndex
CREATE UNIQUE INDEX "RolePermission_role_name_permission_name_key" ON "RolePermission"("role_name", "permission_name");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userId_role_name_key" ON "UserRole"("userId", "role_name");
