import { Paging } from '../../core/paging'
import { range } from '../../core'

describe("Paging", () => {
    describe("Page", () => {
        it("should return the proper rows based on data and configuration", () => {
            expect(Paging
                .on([1, 2, 3, 4])
                .getPage({
                    itemsPerPage: 2,
                    page: 1
                })).toEqual([3, 4]);
        });

        it("should return remaining rows on last page", () => {
            expect(Paging
                .on([1, 2, 3, 4])
                .getPage({
                    itemsPerPage: 3,
                    page: 1
                })).toEqual([4]);
        });

        it("should return last page when page requested is greater than last page", () => {
            expect(Paging
                .on([1, 2, 3, 4])
                .getPage({
                    itemsPerPage: 3,
                    page: 3
                })).toEqual([4]);
        });
    });
    
    describe("Available pages from data length", () => {
        it("should be a list of available page numbers", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 5,
                    numItems: 20
                })).toEqual([0, 1, 2, 3])
        });
        
        it("should be a maxed list of available page numbers", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 5,
                    maxPages: 3,
                    numItems: 20
                })).toEqual([0, 1, 2])
        });
        
        it("should be a maxed list of available page numbers centered on currentPage in the middle", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 10,
                    maxPages: 3,
                    currentPage: 5,
                    numItems: 100
                })).toEqual([4, 5, 6])
        });
        
        it("should be a maxed list of available page numbers centered on currentPage at the beginning", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 10,
                    maxPages: 5,
                    currentPage: 1,
                    numItems: 50
                })).toEqual([0, 1, 2, 3, 4])
        });
        
        it("should be a maxed list of available page numbers centered on currentPage at the end", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 10,
                    maxPages: 5,
                    currentPage: 9,
                    numItems: 100
                })).toEqual([5, 6, 7, 8, 9])
        });
        
        it("should display numOfPages when numOfPages is less than maxPages", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 2,
                    maxPages: 10,
                    currentPage: 4,
                    numItems: 10
                })).toEqual([0, 1, 2, 3, 4])
        });
        
        it("should not have decimals in pages", () => {
            expect(Paging
                .getAvailablePagesFrom({
                    itemsPerPage: 10,
                    maxPages: 5,
                    currentPage: 9,
                    numItems: 99
                })).toEqual([5, 6, 7, 8, 9])
        });
    });
});
