async function handler({ subject, standard }) {
  if (!subject || !standard) {
    return { error: "Subject and standard are required" };
  }

  try {
    const units = await sql`
      SELECT u.unit_number, u.title 
      FROM units u
      JOIN subjects s ON u.subject_id = s.id
      WHERE LOWER(s.name) = LOWER(${subject})
      AND s.standard = ${standard}
      ORDER BY u.unit_number
    `;

    return {
      units: units.map((unit) => ({
        unitNumber: unit.unit_number,
        title: unit.title,
      })),
    };
  } catch (error) {
    return { error: "Failed to fetch units" };
  }
}
export async function POST(request) {
  return handler(await request.json());
}