/*
  Warnings:

  - You are about to drop the `personagens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `description` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `episodes` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `releaseYear` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `studio` on the `animes` table. All the data in the column will be lost.
  - Added the required column `author` to the `animes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `animes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `animes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher` to the `animes` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "personagens";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_animes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "isbn" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "year" INTEGER,
    "descripition" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_animes" ("createdAt", "id", "title", "updatedAt") SELECT "createdAt", "id", "title", "updatedAt" FROM "animes";
DROP TABLE "animes";
ALTER TABLE "new_animes" RENAME TO "animes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
