export const SHEETDB_API_URL = "https://sheetdb.io/api/v1/867hol5s6qm00";

export interface SheetSubmission {
  type: "registration" | "contact";
  name: string;
  email: string;
  event?: string;
  subject?: string;
  message?: string;
}

export async function submitToSheetDB(payload: SheetSubmission): Promise<boolean> {
  try {
    const row = {
      id: Date.now().toString(),
      type: payload.type,
      name: payload.name,
      email: payload.email,
      event: payload.event || "",
      subject: payload.subject || "",
      message: payload.message || "",
      date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    const res = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [row] }),
    });

    return res.ok;
  } catch (err) {
    console.error("Failed to submit to SheetDB:", err);
    return false;
  }
}
