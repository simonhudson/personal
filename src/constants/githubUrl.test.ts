import githubUrl from './githubUrl';
describe('githubUrl', () => {
    it('should return expected value', () => {
        expect(githubUrl).toEqual('https://github.com/simonhudson/');
    });
});
