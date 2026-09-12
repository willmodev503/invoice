-- AlterTable
ALTER TABLE "Contract"
ADD COLUMN "demoSessionId" INTEGER;

-- AddForeignKey
ALTER TABLE "Contract"
ADD CONSTRAINT "Contract_demoSessionId_fkey"
FOREIGN KEY ("demoSessionId")
REFERENCES "DemoSession"("id")
ON DELETE SET NULL
ON UPDATE CASCADE;