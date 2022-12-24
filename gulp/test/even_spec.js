describe('even', function () {
    describe('#process', function () {
        it('returns even if is divisible by two', function () {
            expect(even.process(2)).toBe('even')
            expect(even.process(4)).toBe('even')
            expect(even.process(64)).toBe('even')
        })
        it('returns odd if NOT divisible by two', function () {
            expect(even.process(63)).toBe('odds')
        })
    })
})