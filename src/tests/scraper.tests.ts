import request from "supertest";
import app from "../app";

jest.setTimeout(20000); // Aumentar el límite a 20 segs porque el scraper puede tardar más en conexiones lentas

describe("Scraping API", () => {
  it("✅ Debería ejecutar el scraping correctamente", async () => {
    const res = await request(app).get("/api/scrape");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("✅ Scraping completed and news saved.");
  });
});
