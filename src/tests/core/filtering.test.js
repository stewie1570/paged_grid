import { Filter } from '../../core/filtering'

describe("Filtering", () => {
    it("should filter a list of objects based on specified field(s) and value(s)", () => {
        expect(Filter.on({
            data: [
                { id: "some id 1", name: "Stewart" },
                { id: "some id 2", name: "Anderson" }
            ],
            onColumns: ["name"],
            value: "Stewart"
        })).toEqual([{ id: "some id 1", name: "Stewart" }]);
    })

    it("should filter a list of objects based on multiple fields and values", () => {
        expect(Filter.on({
            data: [
                { id: "some id 1", name: "Stewart" },
                { id: "some id 2", name: "Anderson" }
            ],
            onColumns: ["id", "name"],
            value: "Stewart"
        })).toEqual([{ id: "some id 1", name: "Stewart" }]);
    })

    it("should be case insensitive", () => {
        expect(Filter.on({
            data: [
                { id: "some id 1", name: "Stewart" },
                { id: "some id 2", name: "Anderson" }
            ],
            onColumns: ["id", "name"],
            value: "anderson"
        })).toEqual([{ id: "some id 2", name: "Anderson" }]);
    })

    it("should filter on number properties too", () => {
        expect(Filter.on({
            data: [
                { id: "some id 1", name: "Stewart", num: 3 },
                { id: "some id 2", name: "Anderson", num: 123 }
            ],
            onColumns: ["id", "name", "num"],
            value: "12"
        })).toEqual([{ id: "some id 2", name: "Anderson", num: 123 }]);
    })

    it("should not filter when value is empty", () => {
        expect(Filter.on({
            data: [
                { id: "some id 1", name: "Stewart", num: 3 },
                { id: "some id 2", name: "Anderson", num: 123 }
            ],
            onColumns: ["id", "name", "num"],
            value: ""
        })).toEqual([
            { id: "some id 1", name: "Stewart", num: 3 },
            { id: "some id 2", name: "Anderson", num: 123 }
        ]);
    })
})