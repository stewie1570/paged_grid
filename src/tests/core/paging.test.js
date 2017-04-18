import { Paging } from '../../core/paging'
import _ from 'lodash'

describe("Paging", () => {
    describe("Page", () => {
        it("should return the proper rows based on data and configuration", () => {
            expect(Paging
                .on([1, 2, 3, 4])
                .getPage({
                    numPerPage: 2,
                    page: 1
                })).toEqual([3, 4]);
        });

        it("should return remaining rows on last page", () => {
            expect(Paging
                .on([1, 2, 3, 4])
                .getPage({
                    numPerPage: 3,
                    page: 1
                })).toEqual([4]);
        });

        it("should return last page when page requested is greater than last page", () => {
            expect(Paging
                .on([1, 2, 3, 4])
                .getPage({
                    numPerPage: 3,
                    page: 3
                })).toEqual([4]);
        });
    });
    
    describe("Available pages", () => {
        it("should be a list of available page numbers", () => {
            expect(Paging
                .on(_.range(20))
                .getAvailablePagesFrom({
                    numPerPage: 5
                })).toEqual([0, 1, 2, 3])
        });
        
        it("should be a maxed list of available page numbers", () => {
            expect(Paging
                .on(_.range(20))
                .getAvailablePagesFrom({
                    numPerPage: 5,
                    maxPages: 3
                })).toEqual([0, 1, 2])
        });
        
        it("should be a maxed list of available page numbers centered on currentPage in the middle", () => {
            expect(Paging
                .on(_.range(100))
                .getAvailablePagesFrom({
                    numPerPage: 10,
                    maxPages: 3,
                    currentPage: 5
                })).toEqual([4, 5, 6])
        });
        
        it("should be a maxed list of available page numbers centered on currentPage at the beginning", () => {
            expect(Paging
                .on(_.range(50))
                .getAvailablePagesFrom({
                    numPerPage: 10,
                    maxPages: 5,
                    currentPage: 1
                })).toEqual([0, 1, 2, 3, 4])
        });
        
        it("should be a maxed list of available page numbers centered on currentPage at the end", () => {
            expect(Paging
                .on(_.range(100))
                .getAvailablePagesFrom({
                    numPerPage: 10,
                    maxPages: 5,
                    currentPage: 9
                })).toEqual([5, 6, 7, 8, 9])
        });
        
        it("should display numOfPages when numOfPages is less than maxPages", () => {
            expect(Paging
                .on(_.range(10))
                .getAvailablePagesFrom({
                    numPerPage: 2,
                    maxPages: 10,
                    currentPage: 4
                })).toEqual([0, 1, 2, 3, 4])
        });
        
        it("should not have decimals in pages", () => {
            expect(Paging
                .on(_.range(99))
                .getAvailablePagesFrom({
                    numPerPage: 10,
                    maxPages: 5,
                    currentPage: 9
                })).toEqual([5, 6, 7, 8, 9])
        });
    });
});
