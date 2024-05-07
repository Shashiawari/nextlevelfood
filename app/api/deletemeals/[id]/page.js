import sql from "better-sqlite3";

const db = sql("meals.db");

export default function deleteMeal(mealSlug) {
  const statement = db.prepare("DELETE FROM meals WHERE slug = ?");
  const result = statement.run(mealSlug);
  return result.changes; // Number of rows affected
}

// Extract meal slug from dynamic route parameter
const mealSlugToDelete = params.id;

// Call deleteMeal with the extracted meal slug
const changes = deleteMeal(mealSlugToDelete);
console.log(`${changes} row(s) deleted.`);
