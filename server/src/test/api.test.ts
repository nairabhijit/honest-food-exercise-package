import request from "supertest";
import { expect } from "chai";
import configureRoutes from "../routes";

const app = configureRoutes();

describe("Testing GET /outlet-identifier", () => {
  it("Should return a validation error when lat lng not passed", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('"lat" is required');
        done();
      });
  });
  it("Should return a validation error when lng not passed", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.19483779999999")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('"lng" is required');
        done();
      });
  });
  it("Should return a validation error when lat not passed", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lng=16.3429833")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('"lat" is required');
        done();
      });
  });
  it("Should return outlet identifier as 'au_vienna_schoenbrunnerstr' for the address 'Stumpergasse 51, 1060 Vienna'", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.19483779999999&lng=16.3429833")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.details.outletIdentifier).to.equal(
          "au_vienna_schoenbrunnerstr"
        );
        done();
      });
  });
  it("Should return outlet identifier as 'au_vienna_landstrasserhauptstr' for the address 'Ungargasse 17, Vienna, Austria'", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.2029047&lng=16.3873319")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.details.outletIdentifier).to.equal(
          "au_vienna_landstrasserhauptstr"
        );
        done();
      });
  });
  it("Should return outlet identifier as 'au_vienna_dreyhausenstr' for the address 'Linzer Straße 7, Vienna, Austria'", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.1919498&lng=16.3169423")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.details.outletIdentifier).to.equal(
          "au_vienna_dreyhausenstr"
        );
        done();
      });
  });
  it("Should return outlet identifier as 'au_vienna_maurerhauptplatz' for the address 'Maurer Hauptplatz 7, 1230 Wien, Austria'", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.15064779999999&lng=16.2677725")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.details.outletIdentifier).to.equal(
          "au_vienna_maurerhauptplatz"
        );
        done();
      });
  });
  it("Should return outlet identifier as null for the address 'Bahnhofplatz 1, Linz, Austria'", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.2917928&lng=14.2911107")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.details.outletIdentifier).to.equal(null);
        done();
      });
  });
  it("Should return outlet identifier as null for the address 'Quadenstraße 5, 1200 Vienna'", (done) => {
    request(app)
      .get("/api/v1/outlet-identifier?lat=48.2350888&lng=16.4674371")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.details.outletIdentifier).to.equal(null);
        done();
      });
  });
});
