const rewire = require("rewire")































































































































const app = rewire("./app")































































































































const fibonacci = app.__get__("fibonacci")







// @ponicode
describe("fibonacci", () => {
    test("0", () => {
        fibonacci(10)
    })
})
