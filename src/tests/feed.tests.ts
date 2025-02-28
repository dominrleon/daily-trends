import request from "supertest";
import app from "../app";
import Feed from "../models/feed.model";

describe("Feed API Endpoints", () => {
  beforeEach(async () => {
    await Feed.deleteMany(); // Limpia la BD antes de cada test
  });

  it("✅ Debería crear una nueva noticia", async () => {
    const res = await request(app)
      .post("/api/feeds")
      .send({
        title: "Test News",
        url: "https://example.com/test-news",
        source: "Test Source",
        publishedAt: new Date(),
      });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test News");
  });

  it("✅ Debería obtener todas las noticias", async () => {
    await new Feed({
      title: "Existing News",
      url: "https://example.com/existing-news",
      source: "Test Source",
      publishedAt: new Date(),
    }).save();

    const res = await request(app).get("/api/feeds");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("✅ Debería obtener una noticia por ID", async () => {
    const news = await new Feed({
      title: "News by ID",
      url: "https://example.com/news-id",
      source: "Test Source",
      publishedAt: new Date(),
    }).save();

    const res = await request(app).get(`/api/feeds/${news._id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("News by ID");
  });

  it("✅ Debería actualizar una noticia", async () => {
    const news = await new Feed({
      title: "News to Update",
      url: "https://example.com/news-update",
      source: "Test Source",
      publishedAt: new Date(),
    }).save();

    const res = await request(app)
      .put(`/api/feeds/${news._id}`)
      .send({ title: "Updated News" });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Updated News");
  });

  it("✅ Debería eliminar una noticia", async () => {
    const news = await new Feed({
      title: "News to Delete",
      url: "https://example.com/news-delete",
      source: "Test Source",
      publishedAt: new Date(),
    }).save();

    const res = await request(app).delete(`/api/feeds/${news._id}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Feed deleted successfully");
  });
});
