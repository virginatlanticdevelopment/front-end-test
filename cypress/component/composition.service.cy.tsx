import { Rooms } from "@/utils/composition.service";

describe('Composition Parser', () => {
	describe('Rooms', () => {
		it('should handle undefined', () => {
			const rooms: any = undefined;
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.be.undefined;
		});

		it('should handle null', () => {
			const rooms: any = null;
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.be.undefined;
		});

		it('should handle invalid', () => {
			const rooms = ['i0,a1'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.be.undefined;
		});

		it('should parse adults', () => {
			const rooms = ['a2'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.not.be.undefined;
			expect(parsed?.length).to.equal(1);
			expect(parsed?.[0].adults).to.equal(2);
			expect(parsed?.[0].childAges.length).to.equal(0);
			expect(parsed?.[0].infants).to.equal(0);
		});

		it('should parse adults and child', () => {
			const rooms = ['a2,c10'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.not.be.undefined;
			expect(parsed?.length).to.equal(1);
			expect(parsed?.[0].adults).to.equal(2);
			expect(parsed?.[0].childAges.length).to.equal(1);
			expect(parsed?.[0].childAges[0]).to.equal(10);
			expect(parsed?.[0].infants).to.equal(0);
		});

		it('should parse adults and children', () => {
			const rooms = ['a2,c10,c6'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.not.be.undefined;
			expect(parsed?.length).to.equal(1);
			expect(parsed?.[0].adults).to.equal(2);
			expect(parsed?.[0].childAges.length).to.equal(2);
			expect(parsed?.[0].childAges[0]).to.equal(10);
			expect(parsed?.[0].childAges[1]).to.equal(6);
			expect(parsed?.[0].infants).to.equal(0);
		});

		it('should parse adults, children and infants', () => {
			const rooms = ['a2,c10,c6,i1'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.not.be.undefined;
			expect(parsed?.length).to.equal(1);
			expect(parsed?.[0].adults).to.equal(2);
			expect(parsed?.[0].childAges.length).to.equal(2);
			expect(parsed?.[0].childAges[0]).to.equal(10);
			expect(parsed?.[0].childAges[1]).to.equal(6);
			expect(parsed?.[0].infants).to.equal(1);
		});

		it('should parse adults and infants', () => {
			const rooms = ['a2,i1'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.not.be.undefined;
			expect(parsed?.length).to.equal(1);
			expect(parsed?.[0].adults).to.equal(2);
			expect(parsed?.[0].childAges.length).to.equal(0);
			expect(parsed?.[0].infants).to.equal(1);
		});

		it('should parse and convert', () => {
			const rooms = ['a2,c16,c15,c11,i1'];
			const parsed = Rooms.parseAndConvert(rooms);
			expect(parsed).to.not.be.undefined;
			expect(parsed.length).to.equal(1);
			expect(parsed[0].adults).to.equal(3);
			expect(parsed[0].childAges).to.deep.equal([16, 15, 11]);
			expect(parsed[0].infants).to.equal(1);
		});

		it('should handle invalid child age', () => {
			const rooms = ['a1,c1'];
			const parsed = Rooms.parse(rooms);
			expect(parsed).to.be.undefined;
		});
	});
});
