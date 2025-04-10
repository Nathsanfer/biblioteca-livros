/*
  Warnings:

  - You are about to drop the column `descripition` on the `livros` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_livros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "isbn" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "year" INTEGER,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_livros" ("author", "category", "createdAt", "id", "isbn", "publisher", "title", "updatedAt", "year") SELECT "author", "category", "createdAt", "id", "isbn", "publisher", "title", "updatedAt", "year" FROM "livros";
DROP TABLE "livros";
ALTER TABLE "new_livros" RENAME TO "livros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
