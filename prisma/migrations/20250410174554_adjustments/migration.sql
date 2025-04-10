/*
  Warnings:

  - You are about to alter the column `isbn` on the `livros` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_livros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "isbn" BIGINT NOT NULL,
    "category" TEXT NOT NULL,
    "year" INTEGER,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_livros" ("author", "category", "createdAt", "description", "id", "isbn", "publisher", "title", "updatedAt", "year") SELECT "author", "category", "createdAt", "description", "id", "isbn", "publisher", "title", "updatedAt", "year" FROM "livros";
DROP TABLE "livros";
ALTER TABLE "new_livros" RENAME TO "livros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
