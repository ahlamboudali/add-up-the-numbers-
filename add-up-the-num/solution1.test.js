'use strict';

import { addUp} from './solution1.js';

describe('Basic Tests', () => {
    it('should return 10 when 4 is passed', () => {
        expect(addUp(4)).toEqual(10);
    });
    it('should return 91 when 13 is passed', () => {
        expect(addUp(13)).toEqual(91);
    });
    it('should return 180300 when 600 is passed', () => {
        expect(addUp(600)).toEqual(180300);
    });
});
