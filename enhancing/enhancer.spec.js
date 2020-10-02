const { repair, succeed, fail } = require('./enhancer.js');
describe("enhancer", function() {
    describe("repair()", function() {
      it("should return the item with durability of 100", function() {
        const repairItem = repair({ item: "item", durability: 60 });
  
        expect(repairItem.durability).toBe(100);
      });
    });
  
    describe("succeed()", function() {
      it("should return item with mod. enhancements", function() {
        const enchanted = succeed({ item: "item", enhancement: 7 });
        expect(enchanted.enhancement).toBe(8);
      });
  
      it("should return item as 20 if item enhancement is 20", function() {
        const sameEnhance = succeed({ item: "item", enhancement: 20 });
        expect(sameEnhance.enhancement).toBe(20);
      });
    });
  
    describe("fail", function() {
      it("should return -1 if enhancement level is > 16", function() {
        const failedItem = fail({
          item: "item",
          enhancement: 19,
          durability: 80
        });
        expect(failedItem.enhancement).toBe(18);
      });
  
      it("should return durability level - 10 if enhancment level is >||= 15", function() {
        const failedItem = fail({
          item: "item",
          enhancement: 15,
          durability: 65
        });
  
        expect(failedItem.durability).toBe(55);
      });
  
      it("should return durability level -5 if enhancment is < 15", function() {
        const failedItem = fail({
          item: "item",
          enhancement: 14,
          durability: 70
        });
        expect(failedItem.durability).toBe(65);
      });
    });
  });