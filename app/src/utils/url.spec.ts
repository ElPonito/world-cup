import { queryParamsParser } from './url';

describe('url', function () {
    describe('queryParamsParser', () => {
        it('Should parse query param string', () => {
            const queryString = '?state=&code=0aeb92cdfcba861e218a366443dccd0c9190c4ff&scope=read,activity:read_all,profile:read_all,read_all';
            const expectedResult = {
                state: '',
                code: '0aeb92cdfcba861e218a366443dccd0c9190c4ff',
                scope: 'read,activity:read_all,profile:read_all,read_all'
            };

            expect(queryParamsParser(queryString)).toEqual(expectedResult);
        });
    });
});