const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
});

describe('test suite traffic light green', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
});
