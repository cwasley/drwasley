-- CreateTable
CREATE TABLE "Consideration" (
    "id" SERIAL NOT NULL,
    "body" TEXT,
    "symptomId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "order" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Symptom" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "memberId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "strengths" TEXT,
    "limitations" TEXT,
    "contraindications" TEXT,
    "cpt_code" TEXT,
    "format" TEXT,
    "patient_prep" TEXT,
    "memberId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SymptomToTest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SymptomToTest_AB_unique" ON "_SymptomToTest"("A", "B");

-- CreateIndex
CREATE INDEX "_SymptomToTest_B_index" ON "_SymptomToTest"("B");

-- AddForeignKey
ALTER TABLE "Consideration" ADD FOREIGN KEY ("symptomId") REFERENCES "Symptom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Symptom" ADD FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SymptomToTest" ADD FOREIGN KEY ("A") REFERENCES "Symptom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SymptomToTest" ADD FOREIGN KEY ("B") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;
